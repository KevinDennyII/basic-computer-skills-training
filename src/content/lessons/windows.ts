import type { Lesson } from '../types';

export const windowsLessons: Lesson[] = [
  {
    id: 'windows-power-on',
    moduleId: 'windows',
    title: 'Powering up and signing in',
    summary: 'Finding the power button, waking a sleeping computer, and getting past the lock screen.',
    minutes: 5,
    blocks: [
      {
        id: 'power',
        heading: 'One button, two places',
        body: [
          'On a laptop, the power button is usually at the top-right corner of the keyboard, sometimes doubling as the fingerprint reader. On a desktop tower, it is on the front or the top of the case, and it is normally the biggest button there.',
          'Press it once and let go. You do not need to hold it, and pressing it repeatedly does not speed anything up — it can actually confuse the startup.',
        ],
        callout: {
          tone: 'warning',
          text: 'Holding the power button for about ten seconds forces the computer off immediately. That is an emergency tool for when the screen is completely frozen, not a normal way to shut down. Any unsaved work will be lost.',
        },
      },
      {
        id: 'monitor',
        heading: 'If the screen stays black',
        body: [
          'On a desktop setup, the screen has its own power button and its own cord. A common false alarm is a computer that is running perfectly while the monitor is switched off.',
        ],
        steps: [
          'Look for a small light on the front edge of the screen. No light usually means no power.',
          'Press the screen\'s own power button, usually underneath the bottom edge or on the back-right.',
          'Wiggle the mouse or press the spacebar. A dark screen is often just a sleeping computer.',
          'Check that both cords are pushed in firmly — the one to the wall and the one to the computer.',
        ],
      },
      {
        id: 'signin',
        heading: 'Signing in',
        body: [
          'Most computers ask who you are before letting you in. This is a good thing: it keeps your files separate from everyone else\'s on a shared machine.',
          'Windows 11 asks for a PIN by default — a short number, usually four to six digits, that only works on that one physical computer. If someone steals your PIN, they cannot use it anywhere else, which is why a PIN is safer than a password here.',
        ],
        bullets: [
          {
            term: 'Local account',
            text: 'Lives only on that computer. If the sign-in box shows a "Sign-in options" or domain choice, "local" means this computer rather than a company network.',
          },
          {
            term: 'Microsoft account',
            text: 'Uses your email address, and carries your settings and OneDrive files between computers.',
          },
          {
            term: 'Fingerprint or face',
            text: 'Called Windows Hello. Faster than typing, and available if the computer has the sensor for it.',
          },
        ],
        callout: {
          tone: 'tip',
          text: 'On a shared or public computer, always sign out when you finish rather than just closing the lid. Press the Windows key, select your picture, then select Sign out.',
        },
      },
      {
        id: 'shutdown',
        heading: 'Shutting down properly',
        body: [
          'Select the Start button, then the power icon, then choose one of three things: Sleep pauses everything and wakes in a second, Restart turns it off and straight back on again, and Shut down closes everything fully.',
          'Restart is the one to reach for when the computer is behaving strangely. It is genuinely the most effective first step in troubleshooting.',
        ],
      },
    ],
    activity: {
      kind: 'quiz',
      title: 'Check yourself',
      intro: 'Two situations you will absolutely run into one day.',
      questions: [
        {
          id: 'q-win-power-1',
          prompt:
            'You press the power button on the tower, hear a fan spinning, but the screen stays completely black. What is the most likely problem?',
          choices: [
            { id: 'a', label: 'The computer is broken and needs to be replaced' },
            { id: 'b', label: 'The monitor is switched off or its cord is loose' },
            { id: 'c', label: 'You forgot your PIN' },
          ],
          correctChoiceId: 'b',
          explanation:
            'A spinning fan means the computer has power and is starting up. When sound says yes and the picture says no, suspect the screen first.',
        },
        {
          id: 'q-win-power-2',
          prompt: 'A program is frozen and the whole computer stopped responding. What do you try first?',
          choices: [
            { id: 'a', label: 'Hold the power button down for ten seconds' },
            { id: 'b', label: 'Unplug the computer from the wall' },
            { id: 'c', label: 'Restart from the Start menu if you can still reach it' },
          ],
          correctChoiceId: 'c',
          explanation:
            'Always try the gentle way first, because a proper restart saves your work and settings. Holding the power button is the last resort when nothing at all responds.',
        },
      ],
    },
  },
  {
    id: 'windows-desktop',
    moduleId: 'windows',
    title: 'Reading the Windows desktop',
    summary: 'The taskbar, the Start button, the clock, and where your open windows go.',
    minutes: 7,
    blocks: [
      {
        id: 'layout',
        body: [
          'The original version of this workshop taught the Windows 7 desktop, where everything sat in the bottom-left corner. Windows 11 centered the icons along the bottom, which is the main visible change. Everything still does the same job.',
        ],
        bullets: [
          {
            term: 'Desktop',
            text: 'The background picture and any icons resting on it. Think of it as the top of a physical desk.',
          },
          {
            term: 'Taskbar',
            text: 'The strip along the bottom edge that is always visible, even when a program is covering the screen.',
          },
          {
            term: 'Start button',
            text: 'The four-pane Windows logo on the taskbar. This is the way in to everything installed on the computer.',
          },
          {
            term: 'System tray',
            text: 'The far-right end of the taskbar: the clock, the volume, the wi-fi signal and the battery.',
          },
        ],
      },
      {
        id: 'start',
        heading: 'The Start button is the answer to "where is it?"',
        body: [
          'If you cannot find a program, select Start and simply begin typing its name. Search starts the moment you type, and the best match is usually highlighted before you finish the word.',
          'This one habit replaces hunting through menus. Type "word" for Microsoft Word, "excel" for Excel, "settings" to change how the computer behaves.',
        ],
        callout: {
          tone: 'tip',
          text: 'Pressing the Windows key on the keyboard opens Start without touching the mouse at all. It is the key with the four-pane logo, near the spacebar.',
        },
      },
      {
        id: 'files',
        heading: 'Files, folders and File Explorer',
        body: [
          'A file is one item: a letter, a photo, a spreadsheet. A folder is a container that holds files and other folders. File Explorer is the program that lets you look through them, and its icon is a small manila folder on the taskbar.',
          'Windows sets up folders for you, and using them instead of dumping everything on the desktop is the difference between finding a document in five seconds and never finding it again.',
        ],
        bullets: [
          { term: 'Documents', text: 'Letters, resumes, spreadsheets — anything you write.' },
          { term: 'Downloads', text: 'Everything that arrives from the internet lands here first.' },
          { term: 'Pictures', text: 'Photos and images.' },
          {
            term: 'OneDrive',
            text: 'A folder that copies itself to the internet automatically, so your files survive even if the computer does not.',
          },
        ],
      },
    ],
    activity: {
      kind: 'desktop-sandbox',
      title: 'Practice on a pretend Windows desktop',
      intro:
        'This is a picture of a Windows 11 desktop, not the real thing. Follow each instruction in turn — nothing here can go wrong.',
      flavor: 'windows',
      tasks: [
        {
          id: 't-start',
          instruction: 'Select the Start button to open the Start menu.',
          targetId: 'start',
          successNote: 'That is your way in to every program on the computer.',
        },
        {
          id: 't-search',
          instruction: 'Select the Search box, where you would type the name of a program.',
          targetId: 'search',
          successNote: 'Typing here finds programs, settings and files all at once.',
        },
        {
          id: 't-explorer',
          instruction: 'Select File Explorer — the small folder icon — to browse your files.',
          targetId: 'explorer',
          successNote: 'This is where Documents, Downloads and Pictures live.',
        },
        {
          id: 't-clock',
          instruction: 'Find the clock on the taskbar.',
          targetId: 'clock',
          successNote: 'The far-right corner holds the clock, volume, wi-fi and battery.',
        },
        {
          id: 't-recycle',
          instruction: 'Select the Recycle Bin, where deleted files wait before they are gone for good.',
          targetId: 'recycle',
          successNote:
            'Deleted something by mistake? Open the Recycle Bin, right-click the file and choose Restore.',
        },
      ],
    },
  },
  {
    id: 'windows-mouse',
    moduleId: 'windows',
    title: 'Clicking with confidence',
    summary: 'Left click, right click, double click, the middle wheel, and dragging.',
    minutes: 8,
    blocks: [
      {
        id: 'left',
        heading: 'Left click — the everyday click',
        body: [
          'When anyone says "click", they mean press the left button once. One click selects a thing, and a single click is enough for anything on the taskbar or inside a program.',
        ],
        bullets: [
          { text: 'One click selects an item or presses a button.' },
          { text: 'Two quick clicks — a double click — opens files, folders and programs.' },
          { text: 'Hold the button down while moving to drag something, or to highlight text.' },
        ],
        callout: {
          tone: 'tip',
          text: 'Double clicking is the part that trips most people up. The two clicks need to be quick and the mouse needs to stay still between them. If a double click does not work, you are probably moving the mouse a hair between clicks.',
        },
      },
      {
        id: 'right',
        heading: 'Right click — the "what can I do with this?" click',
        body: [
          'Right clicking opens a small menu of the things you can do to whatever you clicked on. The menu changes depending on what you clicked, which makes it the fastest way to discover options without memorising anything.',
          'Right-click a file and you get Copy, Rename, Delete and Share. Right-click empty desktop space and you get options for the desktop itself. When you feel stuck, right-click the thing you are stuck on.',
        ],
      },
      {
        id: 'middle',
        heading: 'The wheel in the middle',
        body: [
          'Rolling the wheel scrolls up and down a page. What most people never discover is that the wheel is also a button you can press.',
        ],
        bullets: [
          { text: 'Middle-click a link in a web browser to open it in a new tab without leaving the page.' },
          { text: 'Middle-click a browser tab to close it instantly.' },
          { text: 'Hold Ctrl and roll the wheel to make everything on screen bigger or smaller.' },
        ],
      },
      {
        id: 'touchpad',
        heading: 'On a laptop trackpad',
        body: [
          'A trackpad does all of the same things. Tap with one finger to left click, tap with two fingers to right click, and slide two fingers up or down to scroll. There is also usually a physical click at the bottom edge of the pad if you prefer the feel of a real button.',
        ],
      },
    ],
    activity: {
      kind: 'mouse-trainer',
      title: 'Click practice',
      intro:
        'Follow each instruction on the practice square below. Using a keyboard instead? Press Enter for a left click, and the menu key or Shift and F10 together for a right click.',
      flavor: 'windows',
      challenges: [
        {
          id: 'm-left',
          action: 'left-click',
          instruction: 'Left click the file once to select it.',
          successNote: 'Selected. One click highlights, it does not open.',
        },
        {
          id: 'm-double',
          action: 'double-click',
          instruction: 'Now double click the file to open it.',
          successNote: 'Opened. Two quick clicks, mouse held still.',
        },
        {
          id: 'm-right',
          action: 'right-click',
          instruction: 'Right click the file to see what you can do with it.',
          successNote: 'There is your menu of options — Copy, Rename, Delete and more.',
        },
      ],
    },
  },
  {
    id: 'windows-shortcuts',
    moduleId: 'windows',
    title: 'Keyboard shortcuts worth knowing',
    summary: 'Copy, paste, undo and the two that will save you the most trouble.',
    minutes: 6,
    blocks: [
      {
        id: 'how',
        body: [
          'A shortcut means holding one key down while tapping another. For Ctrl and C, you hold Ctrl, tap C once, then let both go. You are not pressing them at the exact same instant, and you are not typing a capital letter.',
          'The Ctrl key sits in the bottom-left corner of the keyboard, and there is a second one on the bottom-right.',
        ],
      },
      {
        id: 'core',
        heading: 'The essential six',
        bullets: [
          { term: 'Ctrl + C', text: 'Copy what you selected, leaving the original in place.' },
          { term: 'Ctrl + X', text: 'Cut what you selected, removing it so you can move it.' },
          { term: 'Ctrl + V', text: 'Paste whatever you copied or cut.' },
          { term: 'Ctrl + Z', text: 'Undo the last thing you did. Press it repeatedly to go further back.' },
          { term: 'Ctrl + S', text: 'Save. Do this often and without thinking about it.' },
          { term: 'Ctrl + F', text: 'Find a word on the page or in the document.' },
        ],
        body: [
          'Ctrl and Z is the one that ends the fear of computers. Deleted a paragraph you needed? Ctrl and Z. Dragged a folder somewhere strange? Ctrl and Z. Almost everything is reversible.',
        ],
      },
      {
        id: 'windows-key',
        heading: 'Shortcuts using the Windows key',
        bullets: [
          { term: 'Windows key', text: 'Open the Start menu.' },
          { term: 'Windows + E', text: 'Open File Explorer to browse your files.' },
          { term: 'Windows + L', text: 'Lock the screen instantly when you step away.' },
          { term: 'Windows + D', text: 'Hide everything and show the desktop. Press again to bring it all back.' },
          { term: 'Alt + Tab', text: 'Switch between the programs you have open.' },
        ],
        callout: {
          tone: 'warning',
          text: 'Shift + Delete deletes a file permanently, skipping the Recycle Bin entirely. There is no undo for that one. Use plain Delete unless you are certain.',
        },
      },
    ],
    activity: {
      kind: 'shortcut-trainer',
      title: 'Shortcut drills',
      intro:
        'Press each shortcut on your actual keyboard. Nothing gets copied or saved for real — this page just listens for the keys.',
      flavor: 'windows',
      drills: [
        { id: 's-copy', label: 'Copy', keys: ['Control', 'c'], meaning: 'Copy the selected item' },
        { id: 's-paste', label: 'Paste', keys: ['Control', 'v'], meaning: 'Paste what you copied' },
        { id: 's-undo', label: 'Undo', keys: ['Control', 'z'], meaning: 'Undo your last action' },
        { id: 's-save', label: 'Save', keys: ['Control', 's'], meaning: 'Save your work' },
      ],
    },
  },
];
