# First Steps — Basic Computer Skills

An interactive online course that teaches the everyday basics of using a Windows PC, a Mac, and
common apps like Word, Excel, Google Docs and Google Sheets.

It began in 2019 as two PowerPoint decks written for a women's shelter workshop. This is that same
material rebuilt as a self-paced website, with the content brought up to date for 2026: Windows 11
and current macOS instead of Windows 7 and OS X, Microsoft 365 and Google Workspace instead of the
old Office suite, and trackpads and touch alongside mice.

## Who it is for

Adults who were never taught how to use a computer, working at their own speed. The writing avoids
jargon, every technical term is explained the first time it appears, and nothing in the course can
damage a real computer — all the practice screens are simulations.

## Running it

```bash
npm install
npm run dev
```

Then open the address it prints, usually `http://localhost:5173`.

Other commands:

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check and build the production site into `dist/` |
| `npm run preview` | Serve the built `dist/` folder locally |
| `npm run typecheck` | Type-check without building |

## Deploying

`npm run build` produces a fully static site in `dist/`. It needs no server-side code, no database
and no environment variables, so it can be dropped onto Netlify, Vercel, GitHub Pages, or any plain
web host.

Two choices make it unusually portable, which matters for shelters and community labs:

- **Relative asset paths** (`base: './'` in [vite.config.ts](vite.config.ts)) mean the site works
  from a subdirectory, not just a domain root.
- **Hash-based routing** means it also runs straight from the file system or a USB stick without a
  server rewriting URLs.

## Course structure

| Module | Lessons | Hands-on practice |
| --- | --- | --- |
| Start Here | Welcome, how to move around | — |
| How a Computer Works | Terminology, hardware, software | Clickable computer diagram, app-to-job matching, quiz |
| Using a Windows PC | Power on and sign in, the desktop, clicking, shortcuts | Simulated Windows 11 desktop, click trainer, `Ctrl` drills, quizzes |
| Using a Mac | Starting up, the desktop, right-clicking, shortcuts | Simulated Mac desktop, click trainer, `Command` drills |
| Documents & the Cloud | Microsoft Office, Google Workspace, choosing a tool | Microsoft-to-Google matching, "which app?" scenarios |
| You Did It | Review and habits to keep | Final quiz, printable certificate |

## How progress is saved

Progress lives in the browser's `localStorage` on that one computer. There are no accounts, no email
addresses and no passwords, which keeps the barrier to starting as low as possible.

The trade-offs are deliberate and stated to the learner in the second lesson: progress does not
travel between computers, and anyone sharing a machine should use the **Reset progress** button on
the home page before the next person begins. All storage access is wrapped in `try`/`catch` in
[src/lib/progress.ts](src/lib/progress.ts) so that private browsing or a locked-down lab machine
degrades to a working-but-forgetful course rather than a broken one.

## Accessibility

- Every activity is completable with the keyboard alone; the simulated desktops are built from real
  `<button>` elements rather than click handlers on graphics.
- The click and shortcut trainers each include an escape hatch for anyone who cannot double-click or
  hold two keys at once.
- Body text never drops below `1rem`, and form fields are held at `1rem` so iOS Safari does not zoom
  when they are focused.
- All motion is disabled under `prefers-reduced-motion`, including the particle effects.
- Colour is never the only signal — correct and incorrect states carry icons and text as well.

## Design notes

The visual direction is a soft mist background, deep teal, and a coral accent, with Sora for display
type and Lexend for body copy (chosen for reading comfort).

Typography follows the responsive-typography approach of keeping body text at a fixed comfortable
size across devices while headings scale fluidly with `clamp()`. The component patterns — content as
data, derived state rather than duplicated state — follow Josh Comeau's
[Joy of React](https://courses.joshwcomeau.com/joy-of-react).

The celebratory effects come from the techniques in Josh Comeau's
[Whimsical Animations](https://whimsy.joshwcomeau.com/) work. Particles are positioned with polar
coordinates — an angle and a distance — and converted to `translate()` values using CSS's own
`sin()` and `cos()`, which is far easier to reason about than picking X/Y pairs by hand. See
[src/components/whimsy/SparkleBurst.module.css](src/components/whimsy/SparkleBurst.module.css).
Animation is CSS-first throughout, reserving JavaScript for state rather than for movement.

## Project layout

```
src/
  assets/            Hero image
  components/
    activities/      The seven interactive activity types
      desktops/      Simulated Windows 11 and macOS desktops
    brand/           Brandmark and hero
    layout/          Site shell
    ui/              Callouts, icons
    whimsy/          Particle effects
  content/           Course content as typed data
    lessons/         One file per module
  lib/               Progress storage, reduced-motion hook
  pages/             Home, Module, Lesson, Certificate
  styles/            Design tokens and global CSS
```

Lessons are plain typed data in `src/content/`, so the wording can be edited without touching any
component code. Adding a lesson means adding an object to the relevant file in
`src/content/lessons/`.

## Credits

Originally written and taught by OhhDenny Services, LLC in 2019. Rebuilt as an interactive course in
2026.
