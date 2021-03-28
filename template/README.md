# React Typescript Template

An opinionated Typescript CRA template.

Component generation:
`npx generate-react-cli component NewPage --type=page`
`npx generate-react-cli component Box`

Redux Toolkit
comes with redux thunk for async operations
redux-logger middleware added

using defined typed hooks [https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks]

React Router
not integrated into Redux store [https://reactrouter.com/web/guides/deep-redux-integration]

> Our recommendation is not to keep your routes in your Redux store at all.

Styled Components
with typed theme

Eslint and prettier

Jest
with transformers and jest-styled-components for snapshots

React Testing library

Framer Motion
Used for animation

Highly used packages
classnames ->
react-helmet -> adjusting html/head objects
husky -> build hooks

Good to add
No end2end tests but this can be added with puppeteer if required
cra-bundle-analyzer
source-map-explorer
