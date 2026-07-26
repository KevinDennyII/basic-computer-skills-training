import { useMemo, useState } from 'react';
import type { Activity } from '../../content/types';
import { useProgress } from '../../lib/ProgressContext';
import ActivityShell from './ActivityShell';
import SparkleBurst from '../whimsy/SparkleBurst';
import styles from './Quiz.module.css';

type QuizActivity = Extract<Activity, { kind: 'quiz' }>;

interface QuizProps {
  activity: QuizActivity;
  activityId: string;
}

export default function Quiz({ activity, activityId }: QuizProps) {
  const { recordQuiz } = useProgress();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [burst, setBurst] = useState(0);
  // Track which question just fired so earlier correct answers do not sparkle again.
  const [burstQuestionId, setBurstQuestionId] = useState<string | null>(null);

  const answeredCount = Object.keys(answers).length;
  const correctCount = useMemo(
    () =>
      activity.questions.filter(
        (question) => answers[question.id] === question.correctChoiceId,
      ).length,
    [activity.questions, answers],
  );
  const allAnswered = answeredCount === activity.questions.length;

  const choose = (questionId: string, choiceId: string, correctChoiceId: string) => {
    if (answers[questionId]) return;
    const nextAnswers = { ...answers, [questionId]: choiceId };
    setAnswers(nextAnswers);

    if (choiceId === correctChoiceId) {
      setBurstQuestionId(questionId);
      setBurst((count) => count + 1);
    }

    if (Object.keys(nextAnswers).length === activity.questions.length) {
      const correct = activity.questions.filter(
        (question) => nextAnswers[question.id] === question.correctChoiceId,
      ).length;
      recordQuiz(activityId, correct, activity.questions.length);
    }
  };

  return (
    <ActivityShell
      title={activity.title}
      intro={activity.intro}
      footer={
        allAnswered ? (
          <p className={styles.score} role="status">
            {correctCount === activity.questions.length
              ? `All ${activity.questions.length} correct. That is the whole idea locked in.`
              : `You got ${correctCount} of ${activity.questions.length}. Read the explanations above — that is where the learning happens.`}
            <button
              type="button"
              className={styles.retry}
              onClick={() => {
                setAnswers({});
                setBurstQuestionId(null);
              }}
            >
              Try again
            </button>
          </p>
        ) : (
          <p className={styles.progressNote}>
            {answeredCount} of {activity.questions.length} answered
          </p>
        )
      }
    >
      <ol className={styles.questionList}>
        {activity.questions.map((question, questionIndex) => {
          const picked = answers[question.id];
          const answered = Boolean(picked);
          const gotItRight = picked === question.correctChoiceId;
          const showSparkles = burstQuestionId === question.id;

          return (
            <li key={question.id} className={styles.question}>
              <fieldset className={styles.fieldset}>
                <legend className={styles.prompt}>
                  <span className={styles.questionNumber} aria-hidden="true">
                    {questionIndex + 1}
                  </span>
                  {question.prompt}
                </legend>

                <div className={styles.choices}>
                  {question.choices.map((choice) => {
                    const isPicked = picked === choice.id;
                    const isAnswer = choice.id === question.correctChoiceId;
                    let state = 'idle';
                    if (answered && isAnswer) state = 'correct';
                    else if (answered && isPicked) state = 'wrong';
                    else if (answered) state = 'muted';

                    return (
                      <span key={choice.id} className={styles.choiceWrap}>
                        <button
                          type="button"
                          className={styles.choice}
                          data-state={state}
                          disabled={answered}
                          aria-pressed={isPicked}
                          onClick={() => choose(question.id, choice.id, question.correctChoiceId)}
                        >
                          <span className={styles.choiceMark} aria-hidden="true">
                            {state === 'correct' && (
                              <svg viewBox="0 0 24 24">
                                <path
                                  d="m5 13 4.5 4.5L19 7"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                            {state === 'wrong' && (
                              <svg viewBox="0 0 24 24">
                                <path
                                  d="M7 7l10 10M17 7 7 17"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.6"
                                  strokeLinecap="round"
                                />
                              </svg>
                            )}
                          </span>
                          {choice.label}
                        </button>
                        {isPicked && showSparkles && <SparkleBurst trigger={burst} count={12} />}
                      </span>
                    );
                  })}
                </div>

                {answered && (
                  <p
                    className={gotItRight ? styles.explanationRight : styles.explanationWrong}
                    role="status"
                  >
                    <strong>{gotItRight ? 'Correct. ' : 'Not quite. '}</strong>
                    {question.explanation}
                  </p>
                )}
              </fieldset>
            </li>
          );
        })}
      </ol>
    </ActivityShell>
  );
}
