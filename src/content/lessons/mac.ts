import type { Lesson } from '../types';

export const macLessons: Lesson[] = [
  {
    id: 'mac-power-on',
    moduleId: 'mac',
    title: 'Starting up a Mac',
    summary: 'Where Apple hides the power button, and how signing in differs.',
    minutes: 4,
    blocks: [
      {
        id: 'power',
        heading: 'One button, and the screen comes with it',
        body: [
          'On an iMac, the power button is on the back of the screen, in the lower-left corner as you face it. You have to reach around, which catches everyone out the first time. Because the computer and the screen are one piece, that single button turns on both.',
          'On a MacBook, the power button is the top-right key on the keyboard, which is also the Touch ID fingerprint reader on most models. On modern MacBooks you often do not need it at all: just open the lid and it wakes up.',
        ],
        callout: {
          tone: 'tip',
          text: 'On a MacBook, simply closing the lid puts it to sleep safely. You do not need to shut down every time. Opening the lid picks up exactly where you left off.',
        },
      },
      {
        id: 'signin',
        heading: 'Signing in',
        body: [
          'A Mac asks for your account password, and most Macs also accept a fingerprint through Touch ID. Unlike Windows, there is no separate short PIN — the password is the main way in.',
          'Your Apple Account, which used to be called an Apple ID, connects the Mac to iCloud, the App Store, and any iPhone or iPad you own. It is the same email and password you would use on those devices.',
        ],
      },
      {
        id: 'shutdown',
        heading: 'Shutting down',
        body: [
          'Select the Apple logo in the very top-left corner of the screen, then choose Sleep, Restart, Shut Down or Log Out. That Apple menu is always in the same place no matter what program you are using, which makes it one of the most reliable landmarks on a Mac.',
        ],
      },
    ],
  },
  {
    id: 'mac-desktop',
    moduleId: 'mac',
    title: 'Reading the Mac desktop',
    summary: 'The menu bar at the top, the Dock at the bottom, and Finder.',
    minutes: 7,
    blocks: [
      {
        id: 'differences',
        heading: 'The one big difference from Windows',
        body: [
          'On Windows, each window carries its own menus inside it. On a Mac, the menus for whatever program you are using appear in the single bar across the very top of the screen.',
          'So the top bar changes depending on which program you are in. If you are looking for Print or Save and cannot find it, look up — and check the program name next to the Apple logo to be sure you are in the right program.',
        ],
      },
      {
        id: 'landmarks',
        heading: 'The landmarks',
        bullets: [
          {
            term: 'Apple menu',
            text: 'The logo at the top-left. Shut down, restart, and System Settings all live here.',
          },
          {
            term: 'Menu bar',
            text: 'The strip along the top holding File, Edit and the rest for the program you are in.',
          },
          {
            term: 'Dock',
            text: 'The row of large icons along the bottom. Similar to the Windows taskbar. A small dot underneath an icon means that program is currently open.',
          },
          {
            term: 'Finder',
            text: 'The blue smiling-face icon, always the first item in the Dock. This is the Mac version of File Explorer — it is how you browse your files.',
          },
          {
            term: 'Spotlight',
            text: 'The magnifying glass at the top-right, or press Command and the spacebar. Type a few letters to open anything.',
          },
        ],
        callout: {
          tone: 'tip',
          text: 'Command and spacebar, then type the first few letters of what you want, then press Return. Mac users who look impressively fast are almost always just doing this.',
        },
      },
      {
        id: 'closing',
        heading: 'The three coloured dots',
        body: [
          'At the top-left of every window sit three small circles. Red closes the window, yellow tucks it down into the Dock, and green makes it fill the screen.',
        ],
        callout: {
          tone: 'note',
          text: 'Red closes the window but often leaves the program itself running — you will still see the dot under its Dock icon. To quit a program completely, press Command and Q, or choose Quit from its menu at the top.',
        },
      },
    ],
    activity: {
      kind: 'desktop-sandbox',
      title: 'Practice on a pretend Mac desktop',
      intro: 'A picture of a Mac desktop. Follow each instruction — nothing real can change.',
      flavor: 'mac',
      tasks: [
        {
          id: 't-apple',
          instruction: 'Select the Apple menu, where Shut Down and System Settings live.',
          targetId: 'apple',
          successNote: 'Top-left corner, always in the same place, in every program.',
        },
        {
          id: 't-finder',
          instruction: 'Select Finder in the Dock to browse your files.',
          targetId: 'finder',
          successNote: 'Finder is the Mac equivalent of File Explorer on Windows.',
        },
        {
          id: 't-spotlight',
          instruction: 'Select Spotlight — the magnifying glass — to search the whole Mac.',
          targetId: 'spotlight',
          successNote: 'Or press Command and the spacebar to get here without the mouse.',
        },
        {
          id: 't-close',
          instruction: 'Find the red dot that closes a window.',
          targetId: 'close',
          successNote: 'Red closes, yellow minimises, green fills the screen.',
        },
        {
          id: 't-trash',
          instruction: 'Select the Trash at the end of the Dock.',
          targetId: 'trash',
          successNote: 'Deleted files rest here until you empty it, so mistakes are recoverable.',
        },
      ],
    },
  },
  {
    id: 'mac-mouse',
    moduleId: 'mac',
    title: 'Right-clicking on a Mac',
    summary: 'Yes, it exists. Here is where Apple hid it.',
    minutes: 6,
    blocks: [
      {
        id: 'myth',
        heading: 'The great Mac myth',
        body: [
          'People believe Macs cannot right click, because Apple\'s mouse has no visible seam and the trackpad has no buttons at all. Both absolutely can right click. The button is just invisible.',
        ],
      },
      {
        id: 'magic-mouse',
        heading: 'On the Magic Mouse',
        body: [
          'The smooth white mouse has no visible buttons, but the whole top surface is touch-sensitive and divided down the middle.',
        ],
        bullets: [
          { term: 'Left click', text: 'Press down on the left half of the surface.' },
          { term: 'Right click', text: 'Press down on the right half of the surface.' },
          { term: 'Scroll', text: 'Slide one finger up or down the surface — no wheel to roll.' },
          { term: 'No middle click', text: 'The Magic Mouse has no middle button at all. If you want one, plug in a regular USB mouse; it works on a Mac immediately.' },
        ],
        callout: {
          tone: 'tip',
          text: 'If right-clicking on the right half does nothing, the feature is switched off. Open System Settings, then Mouse, and turn on Secondary click. And no matter what, holding Control while you click always works as a right click.',
        },
      },
      {
        id: 'trackpad',
        heading: 'On a MacBook trackpad',
        body: [
          'The trackpad is the single best thing about a MacBook once you know the gestures.',
        ],
        bullets: [
          { term: 'Left click', text: 'Tap or press anywhere on the pad.' },
          { term: 'Right click', text: 'Tap with two fingers at once.' },
          { term: 'Scroll', text: 'Slide two fingers up or down.' },
          { term: 'Zoom', text: 'Pinch two fingers together or spread them apart, exactly like on a phone.' },
          { term: 'See all windows', text: 'Swipe up with three or four fingers.' },
        ],
      },
      {
        id: 'usb',
        heading: 'Using a normal mouse instead',
        body: [
          'Any ordinary USB or wireless mouse works on a Mac with no setup. Plug it in and it just works, right button, wheel and all. If the Magic Mouse frustrates you, this is a completely reasonable thing to do.',
        ],
      },
    ],
    activity: {
      kind: 'mouse-trainer',
      title: 'Click practice, Mac edition',
      intro:
        'Same practice, Mac layout. Remember: two-finger tap on a trackpad, or hold Control and click, both count as a right click.',
      flavor: 'mac',
      challenges: [
        {
          id: 'mm-left',
          action: 'left-click',
          instruction: 'Click the file once to select it.',
          successNote: 'Selected. On a Mac, a single click selects and does not open.',
        },
        {
          id: 'mm-double',
          action: 'double-click',
          instruction: 'Double click the file to open it.',
          successNote: 'Opened. Same two quick clicks as on Windows.',
        },
        {
          id: 'mm-right',
          action: 'right-click',
          instruction: 'Right click the file — right half of the Magic Mouse, two fingers on a trackpad, or hold Control and click.',
          successNote: 'There it is. Macs right click just fine.',
        },
      ],
    },
  },
  {
    id: 'mac-shortcuts',
    moduleId: 'mac',
    title: 'Mac keyboard shortcuts',
    summary: 'Everything you learned for Windows, with one key swapped.',
    minutes: 5,
    blocks: [
      {
        id: 'swap',
        heading: 'Swap Ctrl for Command',
        body: [
          'This is the good news: Mac shortcuts are the Windows ones with a different key. Wherever Windows uses Ctrl, a Mac uses Command. The Command key sits directly beside the spacebar and is marked with a looping four-leaf symbol.',
        ],
        bullets: [
          { term: 'Command + C', text: 'Copy' },
          { term: 'Command + X', text: 'Cut' },
          { term: 'Command + V', text: 'Paste' },
          { term: 'Command + Z', text: 'Undo' },
          { term: 'Command + S', text: 'Save' },
          { term: 'Command + F', text: 'Find' },
        ],
      },
      {
        id: 'mac-only',
        heading: 'A few that are Mac-only',
        bullets: [
          { term: 'Command + Space', text: 'Open Spotlight search. The fastest way to open anything.' },
          { term: 'Command + Q', text: 'Quit the program completely, not just close its window.' },
          { term: 'Command + Tab', text: 'Switch between open programs.' },
          { term: 'Command + Shift + 4', text: 'Take a picture of part of the screen. Very handy for asking someone for help.' },
        ],
        callout: {
          tone: 'note',
          text: 'Copy and paste work between the two systems too. Copy text on a Windows PC with Ctrl and C, and you can paste it on a Mac with Command and V, as long as you get the text there — the clipboard idea is universal.',
        },
      },
    ],
    activity: {
      kind: 'shortcut-trainer',
      title: 'Command key drills',
      intro:
        'Press each one on your keyboard. If you are on a Windows PC right now, press Ctrl instead — this page accepts either so you can practice both.',
      flavor: 'mac',
      drills: [
        { id: 'ms-copy', label: 'Copy', keys: ['Meta', 'c'], meaning: 'Copy the selected item' },
        { id: 'ms-paste', label: 'Paste', keys: ['Meta', 'v'], meaning: 'Paste what you copied' },
        { id: 'ms-undo', label: 'Undo', keys: ['Meta', 'z'], meaning: 'Undo your last action' },
        { id: 'ms-save', label: 'Save', keys: ['Meta', 's'], meaning: 'Save your work' },
      ],
    },
  },
];
