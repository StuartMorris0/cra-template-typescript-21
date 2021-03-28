# React Typescript Template

An **opinionated** Typescript Create React App (CRA) template. This template was designed to have a good starting point for web app development in Typescript with React.

###Component generation
Components can be created quickly with the relevant files for testing, styles and exports using the `generate-react-cli` commands.
`npx generate-react-cli component NewPage --type=page`
`npx generate-react-cli component Box`

####Redux Toolkit
Redux toolkit is the choice for state management, although _never required_. Redux Toolkit includes wrappers for boilerplate redux code and benefits like redux thunk and immer.
Redux-logger is added as middleware example.
Defined type hooks are pre-created [Defined Type Hooks](https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks). Instead of using `useDispatch` and `useSelector` you can use `useAppDispatch` and `useAppSelector` which will save from copying RootState everywhere.

####React Router
React router is added as the primary routing for the template. It is standalone and the route information is not sync'd with Redux as it is not necassary.

> Our recommendation is not to keep your routes in your Redux store at all.
> [More information](https://reactrouter.com/web/guides/deep-redux-integration)

####Styled Components
Styled components is added for all the css generation following the CSS-in-JS approach. An example styled theme is added with the necassary types.

####Eslint and prettier
Used for formatting and linting code. Rules can be updated as required.

####Jest & React Testing library
Jest is installed and configured with relevant transformers and jest-styled-components for snapshot generation.
React Testing library is configured for all unit testing.

####Framer Motion
Added for animation.

####Additional Helpers
**classnames**: Useful for conditional classname information in react.

```js
var btnClass = classNames({
  btn: true,
  'btn-pressed': this.state.isPressed,
  'btn-over': !this.state.isPressed && this.state.isHovered,
});
```

**react-helmet**: adjusting html/head objects, for example setting page titles
**husky**: build hooks

#####Additional Notes
These packages are not included both worth noting.
No library is used for end to end testing, although this could be configured with puppeteer if required.
cra-bundle-analyzer could be used for analyzing bundle size.
source-map-explorer useful for debugging code bloat.
