
# Step 1 : init project

```sh
mkdir workshop
cd workshop
npm init --yes
npm i -S next
```

 > create basic pages/index.js

```js
export default () => (
  <div>Welcome to next.js!</div>
)
```

test : `npm run dev`

# Step 2 : create basic component

 - import [some JSON](https://github.com/revolunet/react-workshop-1/blob/master/static/links.json) to `/static`
 - use `require('./static/links.json')` to server-side require the data
 - create a `components/Links.js` React component and iterate over the data using `map`

# Step 3 : add component

 - create a `components/Link.js` component
 - use ES6 spread operator to pass Link props from your data

# Step 4 : cosmetics

 - use styled-components to add some style + responsive
 - use next/head to populate your document head

# Step 5 : statefull component

 - create a `components/LinksBrowser.js` component. use `Links` and `Input` and local state for filtering data
 - handle no results case

# Step 6 : add clickable tag

# Step 7 : add animations

 - use ReactCSSTransitionGroup

# Step 8 : add screenshots

 - create a screenshot script and add it to npm scripts
 - show them in the UI

# Step 9 : HOC

 - create a makeStarrable function that add star capabilities to each Link

# Step 10 : Ajax

 - use isomorphic fetch instead of `require` to fetch data
 - use Next.js `getInitialProps` for async fetch