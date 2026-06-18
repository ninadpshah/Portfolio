# Ninad Parthiv Shah — Portfolio

Source for my personal portfolio site. A single-page React app with no build step: CDN-hosted React and Babel, plain files, opens straight from disk or from GitHub Pages.

![No build](https://img.shields.io/badge/build-none-brightgreen)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-222?logo=github)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Why no build step

The site is small enough that a bundler would cost more than it returns. React, ReactDOM, and Babel load from a CDN with pinned versions and SRI hashes, so the whole deploy is "push the files." No `npm install`, no lockfile drift, nothing to break between commits. The tradeoff is in-browser JSX transpilation, which costs a few hundred milliseconds on first paint and requires network access at view time.

## Structure

```
index.html              entry point, CDN script tags, SRI hashes
data.jsx                all resume content: bio, experience, projects, skills, certifications
portfolio-atelier.jsx   the React component that renders the page
portrait.jpg            portrait image
LICENSE
README.md
```

Content and presentation are deliberately separate. Everything that changes often lives in `data.jsx`; everything that changes rarely lives in `portfolio-atelier.jsx`.

## Running locally

Open `index.html` in any modern browser. That is the whole procedure.

For a local server instead (useful if a browser blocks local file loads):

```bash
python -m http.server 8000
# then visit http://localhost:8000
```
