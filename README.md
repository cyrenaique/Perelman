# Amateur Theatre in English Perelman — Website

A modern website for the **Amateur Theatre in English Perelman** association.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Your Media

Simply drop your files into the corresponding folders inside `public/`:

| Media Type | Folder              | Supported Formats                        |
|------------|---------------------|------------------------------------------|
| Pictures   | `public/pictures/`  | .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg |
| Photos     | `public/photos/`    | .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg |
| Videos     | `public/videos/`    | .mp4, .webm, .ogg, .mov                 |

The **Gallery** page automatically displays all images from both `pictures/` and `photos/` folders.  
The **Videos** page automatically displays all videos from the `videos/` folder.

No code changes are needed — just add files and refresh the page!

## Pages

- **Home** — Hero section, features, and call-to-action
- **Gallery** — Photo gallery with lightbox viewer
- **Videos** — Video archive with built-in player
- **About Us** — Mission, values, and team info
- **Contact** — Contact information and message form

## Tech Stack

- **Next.js 14** (React framework)
- **Tailwind CSS** (styling)
- **Lucide React** (icons)
- **TypeScript**

## Deploying for Free

You can deploy this site for free on [Netlify](https://netlify.com) or [Vercel](https://vercel.com).
