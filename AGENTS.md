# Project notes

Perelman Theatre website — Next.js 14 (App Router), TypeScript, Tailwind CSS.

## Commands

- `npm run dev` — local dev server (http://localhost:3000)
- `npm run build` — production build; also the best verification step
- `npx tsc --noEmit` — type check (ESLint is not configured in this repo)

## Media conventions

- `*.mp4` files are git-ignored (see `.gitignore`). Large videos are NOT
  committed — they are hosted externally (Mega.nz / Yandex / YouTube) and linked
  from the pages. Keep it that way to avoid bloating the repo.
- Gallery/video pages generally hardcode their media lists; the Videos page links
  to externally hosted videos.

## Rehearsals page (`src/app/rehearsals/page.tsx`)

- Rehearsal clips are hosted on Mega.nz. The page has a hardcoded list of
  `{ file, url }` entries; `file` encodes the spectacle and year (e.g.
  `MaryPoppins2022-3.mp4`, `SoundOfMusic2025-1.mp4`). Clips are grouped by
  spectacle + year, newest year first.
- Each tile shows a thumbnail with a play overlay and links out to Mega.

### Thumbnails

- Stored as small JPEGs in `public/videos/rehearsal-thumbs/<same-base-name>.jpg`
  (these ARE committed). The page derives the thumbnail path from each clip's
  `file` name.
- To (re)generate after adding/replacing clips: put the source `.mp4` files in
  `public/videos/Rehearsal/` (git-ignored) and run:

  ```
  pwsh ./scripts/generate-rehearsal-thumbs.ps1
  ```

  Requires `ffmpeg` on PATH. Then add the new clip(s) to the list in
  `src/app/rehearsals/page.tsx` with their Mega.nz links.

### Resolving Mega link -> filename

Mega file links don't contain the filename. To map a batch of links to the right
clips, query the Mega API and decrypt the file attributes (AES-128-CBC with the
key derived from the URL fragment). This was used once to build the clip list.
