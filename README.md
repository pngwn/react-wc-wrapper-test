# React in a Web Component Wrapper

React app wrapped in a web component with it's own shadow root for maximum embeddability. Getting an external stylesheet into the scoped DOM is the trickest part but works okay.

## run it

```bash
pnpm i
pnpm dev
```

## what is it

Two identical components with their own shadow roots, one styled, one unstyled. They have the exact same selectors but the CSS that is scoped to each WC does not bleed out.

