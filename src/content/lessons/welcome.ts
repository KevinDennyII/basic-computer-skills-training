import type { Lesson } from '../types';

export const welcomeLessons: Lesson[] = [
  {
    id: 'welcome-how-this-works',
    moduleId: 'welcome',
    title: 'Welcome — you are in the right place',
    summary: 'What this course covers and the one promise we make to you.',
    minutes: 3,
    blocks: [
      {
        id: 'intro',
        body: [
          'This course teaches the everyday computer skills that most people are simply never taught. Not the fancy stuff. The real stuff: turning a computer on, understanding what is on the screen, clicking the right way, and writing a document you can find again tomorrow.',
          'It was first taught in person, in a room, with a projector. This is that same workshop rebuilt so you can take it at your own speed, repeat any part as many times as you like, and never have to raise your hand to ask someone to slow down.',
        ],
      },
      {
        id: 'promise',
        heading: 'Our one promise',
        body: [
          'Nothing here can break. Every practice screen in this course is a pretend computer built out of pictures and buttons. Click anything. Click it wrong. Click it forty times. Nothing on your real computer will change.',
        ],
        callout: {
          tone: 'tip',
          text: 'If you have ever been afraid of pressing the wrong button, this is the place to get over it. That fear is the single biggest thing standing between people and computer confidence.',
        },
      },
      {
        id: 'covering',
        heading: 'What you will learn',
        body: ['The course has five short parts, and you can stop between any of them.'],
        bullets: [
          {
            term: 'How a computer works',
            text: 'The parts and the words, so instructions and help articles stop sounding like a foreign language.',
          },
          {
            term: 'Windows',
            text: 'Signing in, the desktop, the Start button, files and folders, and keyboard shortcuts.',
          },
          {
            term: 'Mac',
            text: 'The same skills on an Apple computer, including the Dock and the trackpad.',
          },
          {
            term: 'Documents and the cloud',
            text: 'Word, Excel, PowerPoint, Google Docs, Sheets, Slides, and where your files actually live.',
          },
          {
            term: 'A finish line',
            text: 'A short review and a certificate with your name on it.',
          },
        ],
      },
    ],
  },
  {
    id: 'welcome-moving-around',
    moduleId: 'welcome',
    title: 'How to move around this course',
    summary: 'Saving your place, using a keyboard instead of a mouse, and calming the animations.',
    minutes: 3,
    blocks: [
      {
        id: 'progress',
        heading: 'Your place is saved automatically',
        body: [
          'Every time you finish a lesson, this website quietly remembers it on this computer, in this browser. You can close the window, walk away, come back tomorrow, and pick up where you stopped.',
          'Because it is saved on the computer rather than in an account, there is no email address to give and no password to remember. That also means two things worth knowing.',
        ],
        bullets: [
          {
            text: 'If you switch to a different computer, your progress does not travel with you.',
          },
          {
            text: 'If you share a computer, use the Reset button at the bottom of the home page before the next person starts, so their progress is their own.',
          },
        ],
      },
      {
        id: 'keyboard',
        heading: 'You do not need a mouse',
        body: [
          'Every button, quiz and activity here can be reached with the keyboard alone. Press Tab to move forward through the things you can click, Shift and Tab together to move back, and Enter or the spacebar to choose the thing you have landed on.',
          'Whatever you have landed on gets a bright outline around it, so you can always see where you are.',
        ],
      },
      {
        id: 'motion',
        heading: 'If movement on screen bothers you',
        body: [
          'This course has small animations — things that slide, bounce and sparkle — because a little delight makes learning stick. If motion makes you dizzy or distracted, turn on the "Reduce motion" setting on your computer and this website will hold still for you.',
        ],
        callout: {
          tone: 'note',
          text: 'On Windows: Settings, then Accessibility, then Visual effects, then turn off Animation effects. On a Mac: System Settings, then Accessibility, then Display, then turn on Reduce motion.',
        },
      },
    ],
  },
];
