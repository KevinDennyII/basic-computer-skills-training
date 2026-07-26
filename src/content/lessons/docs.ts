import type { Lesson } from '../types';

export const docsLessons: Lesson[] = [
  {
    id: 'docs-office',
    moduleId: 'docs',
    title: 'The Microsoft Office family',
    summary: 'Word, Excel and PowerPoint — three tools, three very different jobs.',
    minutes: 7,
    blocks: [
      {
        id: 'intro',
        body: [
          'Microsoft Office is now called Microsoft 365, though almost everyone still says Office. The name change happened because it moved from something you bought once on a disc to something you subscribe to, with the same programs updating themselves quietly in the background.',
          'Three of them do the vast majority of the work.',
        ],
      },
      {
        id: 'word',
        heading: 'Word — for writing',
        body: [
          'Word is for anything made of sentences: a letter, a resume, a school report, a lease agreement. It gives you a blank page and control over how the words look.',
          'It is the right tool when the finished thing will be read like a document or printed.',
        ],
      },
      {
        id: 'excel',
        heading: 'Excel — for numbers and lists',
        body: [
          'Excel gives you a grid of boxes called cells, arranged in lettered columns and numbered rows. You put information in the boxes, and Excel can add it up, sort it, and chart it for you.',
          'It is the right tool for a monthly budget, a list of contacts, tracking hours worked, or anything where you would otherwise be doing arithmetic by hand.',
        ],
        callout: {
          tone: 'tip',
          text: 'Typing = into a cell tells Excel a calculation is coming. Type =SUM(B2:B10) and press Enter to add up everything from box B2 down to B10. That one formula covers most household budgeting.',
        },
      },
      {
        id: 'powerpoint',
        heading: 'PowerPoint — for presenting',
        body: [
          'PowerPoint makes slides: full screens of text and pictures you move through one at a time while talking to a room. It handles animations, images and video.',
          'The workshop you are taking right now began life as two PowerPoint files, which is a fair demonstration of what it is good for — and of the fact that a website can sometimes teach the same material better.',
        ],
      },
      {
        id: 'rest',
        heading: 'The rest of the family',
        bullets: [
          { term: 'Outlook', text: 'Email and calendar.' },
          { term: 'OneNote', text: 'A digital notebook for loose notes and clippings.' },
          { term: 'OneDrive', text: 'Microsoft\'s cloud storage, built into Windows.' },
          { term: 'Teams', text: 'Chat and video meetings, common in workplaces.' },
        ],
      },
    ],
  },
  {
    id: 'docs-google',
    moduleId: 'docs',
    title: 'Google Docs, Sheets and Slides',
    summary: 'The free versions that live in your web browser.',
    minutes: 6,
    blocks: [
      {
        id: 'intro',
        body: [
          'Google makes a matching set of tools that run inside a web browser instead of being installed on the computer. They are free with any Google account, and they line up almost exactly with the Microsoft ones.',
        ],
        bullets: [
          { term: 'Google Docs', text: 'The equivalent of Microsoft Word.' },
          { term: 'Google Sheets', text: 'The equivalent of Microsoft Excel.' },
          { term: 'Google Slides', text: 'The equivalent of Microsoft PowerPoint.' },
          { term: 'Google Drive', text: 'The folder in the cloud where all of it is kept.' },
        ],
      },
      {
        id: 'why',
        heading: 'Why this matters for you',
        body: [
          'Google\'s tools have three advantages that matter enormously if you are rebuilding, sharing a computer, or working from a library or phone.',
        ],
        bullets: [
          {
            term: 'They cost nothing',
            text: 'A Google account is free, and so are Docs, Sheets and Slides.',
          },
          {
            term: 'They save constantly',
            text: 'There is no Save button because it saves every few seconds on its own. If the power cuts out mid-sentence, your work is already safe.',
          },
          {
            term: 'They follow you',
            text: 'Your files live in your account, not on one machine. Sign in at a library, on a friend\'s laptop, or on your phone and everything is there.',
          },
        ],
        callout: {
          tone: 'tip',
          text: 'This makes Google Docs the safer choice on a shared or borrowed computer. Sign in, do your work, sign out — and nothing personal stays behind on that machine.',
        },
      },
      {
        id: 'compat',
        heading: 'They work together',
        body: [
          'You are not choosing a side. A Word document can be opened in Google Docs, and a Google Doc can be downloaded as a Word file — useful when a job application insists on receiving a .docx.',
          'In Google Docs, choose File, then Download, then Microsoft Word. In Word, choose File, then Save As, and pick the location you want.',
        ],
      },
      {
        id: 'cloud',
        heading: 'What "the cloud" actually means',
        body: [
          'The cloud is just a computer somewhere else that holds a copy of your files for you. That is the entire concept. It is not vague or mystical — it is a hard drive in a building far away, kept by Google or Microsoft, that you reach over the internet.',
          'The practical benefit is that if your laptop is stolen, dropped, or left behind, your files are not gone with it.',
        ],
      },
    ],
    activity: {
      kind: 'match-game',
      title: 'Microsoft to Google',
      intro: 'Match each Microsoft program with its Google counterpart.',
      pairs: [
        { id: 'g-word', left: 'Microsoft Word', right: 'Google Docs' },
        { id: 'g-excel', left: 'Microsoft Excel', right: 'Google Sheets' },
        { id: 'g-ppt', left: 'Microsoft PowerPoint', right: 'Google Slides' },
        { id: 'g-onedrive', left: 'Microsoft OneDrive', right: 'Google Drive' },
        { id: 'g-outlook', left: 'Microsoft Outlook', right: 'Gmail' },
      ],
    },
  },
  {
    id: 'docs-choosing',
    moduleId: 'docs',
    title: 'Which app should I use?',
    summary: 'Real situations, and the tool that fits each one.',
    minutes: 6,
    blocks: [
      {
        id: 'intro',
        body: [
          'Knowing the programs matters less than knowing which one to reach for. Once the choice becomes automatic, the computer stops feeling like an obstacle.',
          'A rough rule: sentences go in a document, numbers go in a spreadsheet, and anything you will stand up and talk through goes in slides.',
        ],
      },
      {
        id: 'naming',
        heading: 'Name your files so you can find them',
        body: [
          'The most common way people lose work is not deleting it. It is saving it as "Document1" and never finding it again.',
        ],
        bullets: [
          { text: 'Say what it is: "Rent receipt March 2026" beats "scan".' },
          { text: 'Put the date in year-month-day order so files sort themselves: "2026-03-14 lease".' },
          { text: 'Skip the symbols. Letters, numbers, spaces and dashes are always safe.' },
        ],
        callout: {
          tone: 'tip',
          text: 'Cannot find a file? On Windows press the Windows key and type part of the name. On a Mac press Command and the spacebar and do the same. Searching beats hunting through folders every time.',
        },
      },
    ],
    activity: {
      kind: 'app-picker',
      title: 'Pick the right tool',
      intro: 'Read each situation, then choose the app that fits it best.',
      apps: [
        {
          id: 'doc',
          name: 'Word processor',
          microsoft: 'Microsoft Word',
          google: 'Google Docs',
          job: 'Writing with sentences and paragraphs',
        },
        {
          id: 'sheet',
          name: 'Spreadsheet',
          microsoft: 'Microsoft Excel',
          google: 'Google Sheets',
          job: 'Numbers, budgets, lists and totals',
        },
        {
          id: 'slides',
          name: 'Slides',
          microsoft: 'Microsoft PowerPoint',
          google: 'Google Slides',
          job: 'Presenting to a group',
        },
        {
          id: 'browser',
          name: 'Web browser',
          microsoft: 'Microsoft Edge',
          google: 'Google Chrome',
          job: 'Visiting websites and filling in forms online',
        },
      ],
      scenarios: [
        {
          id: 'sc-resume',
          situation: 'You need to write a resume and email it to an employer.',
          correctAppId: 'doc',
          explanation:
            'A resume is words on a page, so a word processor is right. Word or Google Docs both have resume templates ready to fill in.',
        },
        {
          id: 'sc-budget',
          situation: 'You want to track what you spend each month and see the total automatically.',
          correctAppId: 'sheet',
          explanation:
            'Anything that adds itself up belongs in a spreadsheet. Excel or Google Sheets will do the arithmetic for you.',
        },
        {
          id: 'sc-talk',
          situation: 'You have been asked to speak to a group and want pictures on a screen behind you.',
          correctAppId: 'slides',
          explanation:
            'That is exactly what PowerPoint and Google Slides are for — one screen at a time while you talk.',
        },
        {
          id: 'sc-apply',
          situation: 'You need to fill in a job application on a company website.',
          correctAppId: 'browser',
          explanation:
            'Online forms live in a web browser. Chrome, Edge and Safari all work; use whichever is already on the computer.',
        },
        {
          id: 'sc-contacts',
          situation: 'You want to keep a list of phone numbers you can sort by name.',
          correctAppId: 'sheet',
          explanation:
            'A spreadsheet handles lists beautifully, because it can sort and search columns for you.',
        },
      ],
    },
  },
];

export const finishLessons: Lesson[] = [
  {
    id: 'finish-review',
    moduleId: 'finish',
    title: 'What you now know',
    summary: 'A short review of the whole course, and where to go next.',
    minutes: 5,
    blocks: [
      {
        id: 'recap',
        heading: 'Look at what you covered',
        body: [
          'You started with three words — computer, hardware, software — and finished able to sign in to either kind of computer, read what is on the screen, click with intent, use shortcuts, and choose the right app for a real task.',
          'That is not a small thing. It is the foundation that everything else on a computer is built on.',
        ],
        bullets: [
          { term: 'The parts', text: 'What each piece of hardware does and which problems belong to which part.' },
          { term: 'Windows', text: 'Start button, taskbar, File Explorer, and Ctrl-key shortcuts.' },
          { term: 'Mac', text: 'Apple menu, Dock, Finder, Spotlight, and Command-key shortcuts.' },
          { term: 'Documents', text: 'Word and Excel next to Docs and Sheets, and what the cloud really is.' },
        ],
      },
      {
        id: 'habits',
        heading: 'Five habits to keep',
        bullets: [
          { text: 'Save often. Ctrl or Command and S, without thinking about it.' },
          { text: 'When something goes wrong, undo first. Ctrl or Command and Z.' },
          { text: 'When you feel stuck on an item, right-click it and read the menu.' },
          { text: 'Search instead of hunting. Windows key, or Command and spacebar.' },
          { text: 'Restart before assuming anything is broken.' },
        ],
      },
      {
        id: 'next',
        heading: 'Where to go from here',
        body: [
          'The natural next steps are email, staying safe online, and getting comfortable with a smartphone — all of which build directly on what you just did.',
          'A word about online safety worth carrying with you: no real bank, government office or company will ever telephone or email asking for your password. Anyone who does is lying, no matter how urgent or official they sound. Hang up and call the organisation back on a number you looked up yourself.',
        ],
        callout: {
          tone: 'tip',
          text: 'Repeat any lesson as many times as you like. Coming back a second time, a week later, is how this material moves from "I followed along" to "I know this".',
        },
      },
    ],
    activity: {
      kind: 'quiz',
      title: 'Final review',
      intro: 'Five questions covering the whole course. Take your time.',
      questions: [
        {
          id: 'f-q1',
          prompt: 'Which of these is hardware?',
          choices: [
            { id: 'a', label: 'Microsoft Word' },
            { id: 'b', label: 'The monitor' },
            { id: 'c', label: 'Windows 11' },
          ],
          correctChoiceId: 'b',
          explanation: 'You can touch a monitor. Word and Windows are both software.',
        },
        {
          id: 'f-q2',
          prompt: 'On a Mac, which key replaces Ctrl in shortcuts like copy and paste?',
          choices: [
            { id: 'a', label: 'Command' },
            { id: 'b', label: 'Option' },
            { id: 'c', label: 'Caps Lock' },
          ],
          correctChoiceId: 'a',
          explanation:
            'Command sits next to the spacebar. Command and C copies, Command and V pastes.',
        },
        {
          id: 'f-q3',
          prompt: 'You want to see the options available for a file. What do you do?',
          choices: [
            { id: 'a', label: 'Double click it' },
            { id: 'b', label: 'Right click it' },
            { id: 'c', label: 'Press Delete' },
          ],
          correctChoiceId: 'b',
          explanation:
            'Right clicking shows a menu of everything you can do with whatever you clicked on.',
        },
        {
          id: 'f-q4',
          prompt: 'You need to add up your monthly expenses. Which app fits best?',
          choices: [
            { id: 'a', label: 'Microsoft Word or Google Docs' },
            { id: 'b', label: 'PowerPoint or Google Slides' },
            { id: 'c', label: 'Microsoft Excel or Google Sheets' },
          ],
          correctChoiceId: 'c',
          explanation: 'Spreadsheets do the arithmetic for you. That is their whole purpose.',
        },
        {
          id: 'f-q5',
          prompt: 'You just deleted a paragraph you actually needed. What is the fastest fix?',
          choices: [
            { id: 'a', label: 'Ctrl + Z, or Command + Z on a Mac' },
            { id: 'b', label: 'Restart the computer' },
            { id: 'c', label: 'Retype it from memory' },
          ],
          correctChoiceId: 'a',
          explanation:
            'Undo is the most reassuring shortcut on any computer. Press it repeatedly to go further back.',
        },
      ],
    },
  },
];
