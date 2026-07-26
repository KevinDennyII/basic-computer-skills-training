import type { Lesson } from '../types';

export const fundamentalsLessons: Lesson[] = [
  {
    id: 'fundamentals-terminology',
    moduleId: 'fundamentals',
    title: 'The three words that explain everything',
    summary: 'Computer, hardware, software — and why the difference matters.',
    minutes: 4,
    blocks: [
      {
        id: 'definitions',
        body: [
          'Almost every confusing computer instruction becomes clear once you know which of these three things it is talking about.',
        ],
        bullets: [
          {
            term: 'Computer',
            text: 'An electronic device that stores and works with information. It is made of hardware and software together.',
          },
          {
            term: 'Hardware',
            text: 'The physical parts. If you can touch it, drop it, or unplug it, it is hardware.',
          },
          {
            term: 'Software',
            text: 'The instructions and information. You cannot touch software, only see the results of it on the screen.',
          },
        ],
      },
      {
        id: 'analogy',
        heading: 'A way to remember it',
        body: [
          'Think of a car. The engine, the wheels and the seats are the hardware. The driver deciding where to go is the software. The car is useless without both, and you replace them on completely different schedules.',
          'This is why "my computer is broken" can mean two very different problems. If the screen has a crack, that is hardware and it needs a repair shop. If a program keeps closing on its own, that is software, and it usually needs an update or a restart.',
        ],
        callout: {
          tone: 'tip',
          text: 'Restarting fixes a surprising number of software problems. Before you panic, before you call anyone: turn it off, wait ten seconds, turn it back on. Professionals do this first too.',
        },
      },
    ],
    activity: {
      kind: 'quiz',
      title: 'Hardware or software?',
      intro: 'Two quick questions. Wrong answers cost nothing here.',
      questions: [
        {
          id: 'q-hw-sw-1',
          prompt: 'The keyboard you type on is an example of…',
          choices: [
            { id: 'a', label: 'Hardware' },
            { id: 'b', label: 'Software' },
            { id: 'c', label: 'An operating system' },
          ],
          correctChoiceId: 'a',
          explanation:
            'You can pick a keyboard up and unplug it, so it is hardware. The part that decides what happens when you press a key is software.',
        },
        {
          id: 'q-hw-sw-2',
          prompt: 'A program that lets you write a letter and print it is…',
          choices: [
            { id: 'a', label: 'Hardware' },
            { id: 'b', label: 'Software' },
            { id: 'c', label: 'A hard drive' },
          ],
          correctChoiceId: 'b',
          explanation:
            'A program is software. Microsoft Word and Google Docs are both examples of software for writing.',
        },
      ],
    },
  },
  {
    id: 'fundamentals-hardware',
    moduleId: 'fundamentals',
    title: 'The parts you can touch',
    summary: 'A guided tour of the physical pieces, and what each one actually does.',
    minutes: 6,
    blocks: [
      {
        id: 'intro',
        body: [
          'You do not need to know how any of these parts are built. You only need to know what each one is for, so that when someone says "it is probably your hard drive" you know roughly what they mean.',
          'Select each labeled part below to hear what it does.',
        ],
      },
    ],
    activity: {
      kind: 'hardware-explorer',
      title: 'Tour a computer',
      intro:
        'Select any labeled part. On a phone or tablet, tap the labels below the picture.',
      parts: [
        {
          id: 'monitor',
          name: 'Monitor',
          plainName: 'The screen',
          description:
            'The screen that shows you everything. On a laptop or an iMac the screen is built in, so there is nothing separate to turn on. Note that a monitor only displays — it does not do the thinking.',
        },
        {
          id: 'cpu',
          name: 'Processor (CPU)',
          plainName: 'The brain',
          description:
            'The part that does the thinking, millions of times per second. A faster processor means programs open quicker and video plays more smoothly. You will never see it; it lives inside the case.',
        },
        {
          id: 'memory',
          name: 'Memory (RAM)',
          plainName: 'The desk',
          description:
            'Short-term workspace. Think of it as the size of your desk: the bigger it is, the more things you can have open at once without everything slowing to a crawl. Memory empties every time the computer shuts down.',
        },
        {
          id: 'storage',
          name: 'Storage (hard drive or SSD)',
          plainName: 'The filing cabinet',
          description:
            'Long-term storage where your files and programs live even when the power is off. Most computers sold today use an SSD, which has no moving parts and is much faster than the older spinning hard drives.',
        },
        {
          id: 'keyboard',
          name: 'Keyboard',
          plainName: 'For typing',
          description:
            'How you type letters, numbers and commands. The keys along the bottom edge — Control, Alt or Option, and the Windows or Command key — are the ones that unlock shortcuts.',
        },
        {
          id: 'mouse',
          name: 'Mouse',
          plainName: 'For pointing',
          description:
            'Moves the pointer around the screen so you can select things. It can plug in with a cord or connect wirelessly. Wireless mice need batteries or charging, which is the usual reason one suddenly stops working.',
        },
        {
          id: 'trackpad',
          name: 'Trackpad',
          plainName: 'A built-in mouse',
          description:
            'The smooth rectangle below a laptop keyboard. It does everything a mouse does — you slide one finger to move the pointer and press down to click. Many people find it easier than a mouse once they get used to it.',
        },
        {
          id: 'ports',
          name: 'Ports',
          plainName: 'The plug-in holes',
          description:
            'The openings along the side or back where you plug things in. USB-C is the small oval shape used by most new devices; the older rectangular USB-A is still very common. Cables only fit one way, so never force one.',
        },
      ],
    },
  },
  {
    id: 'fundamentals-software',
    moduleId: 'fundamentals',
    title: 'Operating systems, desktops and apps',
    summary: 'The software layers, from the one that runs everything to the ones you open.',
    minutes: 5,
    blocks: [
      {
        id: 'os',
        heading: 'The operating system',
        body: [
          'The operating system is the main software that runs the whole computer and lets everything else work. It is what appears before you open anything yourself.',
          'There are two you will meet most often, and this course teaches both.',
        ],
        bullets: [
          {
            term: 'Windows',
            text: 'Made by Microsoft, and found on computers from Dell, HP, Lenovo, Asus and many others. Windows 11 is the current version.',
          },
          {
            term: 'macOS',
            text: 'Made by Apple, and found only on Apple computers: the iMac, the Mac mini, the MacBook Air and the MacBook Pro.',
          },
          {
            term: 'ChromeOS',
            text: 'Found on inexpensive laptops called Chromebooks. It works almost entirely through a web browser, so if you learn Google Docs in this course, you already know most of a Chromebook.',
          },
        ],
        callout: {
          tone: 'note',
          text: 'Your phone has an operating system too — iOS on an iPhone, Android on most others. It is the same idea on a smaller screen, which is why skills carry over more than people expect.',
        },
      },
      {
        id: 'desktop',
        heading: 'The desktop',
        body: [
          'The desktop is the home view of your computer: the background picture, plus whatever icons and bars sit on top of it. It is the screen you return to when you close everything.',
          'Both Windows and Mac give you a desktop. They arrange things differently, which is exactly what the next two parts of this course untangle.',
        ],
      },
      {
        id: 'apps',
        heading: 'Programs, applications, apps',
        body: [
          'These three words all mean the same thing: a piece of software built to do one particular job. "Program" is the older word, "application" is the formal one, and "app" is the short version everyone actually says.',
          'The workshop this course came from listed Internet Explorer and iTunes. Both are now retired, which is a good reminder that individual apps come and go while the underlying skill of "open the app that does the job I need" never changes.',
        ],
      },
    ],
    activity: {
      kind: 'match-game',
      title: 'Match each app to its job',
      intro: 'Select an app on the left, then select the job it does on the right.',
      pairs: [
        { id: 'p-word', left: 'Microsoft Word', right: 'Writing letters and documents' },
        { id: 'p-excel', left: 'Microsoft Excel', right: 'Numbers, budgets and lists' },
        { id: 'p-chrome', left: 'Chrome or Edge', right: 'Visiting websites' },
        { id: 'p-mail', left: 'Outlook or Gmail', right: 'Sending and reading email' },
        { id: 'p-zoom', left: 'Zoom', right: 'Video calls and meetings' },
      ],
    },
  },
];
