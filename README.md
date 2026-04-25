# Ninad Parthiv Shah — Portfolio

Source for my personal portfolio site. A single-page React app with no build step: CDN-hosted React and Babel, plain files, opens straight from disk or from GitHub Pages.

![No build](https://img.shields.io/badge/build-none-brightgreen)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-222?logo=github)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Why no build step

The site is small enough that a bundler would cost more than it returns. React, ReactDOM, and Babel load from a CDN with pinned versions and SRI hashes, so the whole deploy is "push the files." No `npm install`, no lockfile drift, nothing to break between commits. The tradeoff is in-browser JSX transpilation, which costs a few hundred milliseconds on first paint and requires network access at view time.
