# Demo
https://mkondel.github.io/giphybro

# Summary
Type to search. Scroll down. Press ESC to reset.

# Tech

## UI
[Next.js](https://nextjs.org/)

[React](https://reactjs.org/)

[Infinite Scroll](https://github.com/danbovey/react-infinite-scroller)

[Focus Trap](https://github.com/focus-trap/focus-trap-react)

## Hosting
Github using [react-gh-pages](https://github.com/gitname/react-gh-pages).

## Details
- The current app is completely serverless, it could have been implemented in plain create-react-app. Next.js gives me a running start with its boilerplate, but it will also handle API and SSR when that's needed.
- Infinite scroll lib is utilized for its eponymous behavior.
- Focus trap allows constant keyboard input w/o a visible text box.

# Trade-offs
- Pure serverless SPA can't handle sensitive data since it will have to be part of the JS bundle.
- No backend from github pages.
- Context is already part of React, so no additional libs were needed. Reduces complexity and saves implementation time. Redux was a major step in the evolution and a great tool, but it's time to face the music...
- There are no benefits to using Typescript.
- The gif previews are using downsampled versions to reduce load times. Users can see the full high quality version by clicking on the thumbnails.

# Time
- Next.js, gh-pages setup, deploying successfully: 3hr
- Infinite scroll: 2hr
- Focus trap and the invisible text input: 2hr
- Styling and UI: 3hr
- Giphy API: 2hr
- TOTAL: 12hr
