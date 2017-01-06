### step 1 : initial create-react-app
[diff](http://github.com/revolunet/react-workshop-1/commit/8ef36f074a3e3e6571eb119f4b1a9b3e8e8c6707)
[tree](http://github.com/revolunet/react-workshop-1/tree/8ef36f074a3e3e6571eb119f4b1a9b3e8e8c6707)




### step 2 : basic component
[diff](http://github.com/revolunet/react-workshop-1/commit/df261218f0df6dd1acb4c06ddc05409ca0bea9b3)
[tree](http://github.com/revolunet/react-workshop-1/tree/df261218f0df6dd1acb4c06ddc05409ca0bea9b3)

 - Import [data](https://raw.githubusercontent.com/revolunet/react-workshop-1/c4f6971cfd36a30db5a911712a0790e1699ae097/static/links.json) into src/links.json
 - Create a basic Links component
 - Use the console and add a key perf hint



### step 3 : more components
[diff](http://github.com/revolunet/react-workshop-1/commit/d7540f54e65837dfebb8ca74d429e61a56ae8586)
[tree](http://github.com/revolunet/react-workshop-1/tree/d7540f54e65837dfebb8ca74d429e61a56ae8586)

 - add a Link component
 - use spread operator



### step 4 : cosmetics
[diff](http://github.com/revolunet/react-workshop-1/commit/3f3e3fed4f3200af6a0bf2e5c643f00447a722f3)
[tree](http://github.com/revolunet/react-workshop-1/tree/3f3e3fed4f3200af6a0bf2e5c643f00447a722f3)

 - create a separate Link component
 - use styled-components to theme it
 - add media queries



### step 5 : LinksBrowser stateful component
[diff](http://github.com/revolunet/react-workshop-1/commit/97fc4f34b9b0bd736746e999c1cccbc4c3ae0018)
[tree](http://github.com/revolunet/react-workshop-1/tree/97fc4f34b9b0bd736746e999c1cccbc4c3ae0018)

 - create a LinksBrowser component, made of an input + the Links component
 - use internal state to store input changes
 - implement search filter
 - show no results message



### step 6 : add onTagClick
[diff](http://github.com/revolunet/react-workshop-1/commit/fed019bb856b54ac8d13e0942fb8483a3c88f60a)
[tree](http://github.com/revolunet/react-workshop-1/tree/fed019bb856b54ac8d13e0942fb8483a3c88f60a)

 - pass `onTagClick` from `LinksBrowser` down to `Tag` component via props
 - from `Tag`, send tag value to the `onTagClick` callback
 - use `setState` on `LinksBrowser`



### step 7 : add screenshots
[diff](http://github.com/revolunet/react-workshop-1/commit/e04fcf37c9455e5da689ed36cf640ad5a18ac387)
[tree](http://github.com/revolunet/react-workshop-1/tree/e04fcf37c9455e5da689ed36cf640ad5a18ac387)

 - create a script to generate screenshots with https://github.com/sindresorhus/pageres
 - add it as an npm script
 - show screenshots in the UI



### step 8 : add Star
[diff](http://github.com/revolunet/react-workshop-1/commit/04721f65e3359ac3961f51fb12871fedf9176892)
[tree](http://github.com/revolunet/react-workshop-1/tree/04721f65e3359ac3961f51fb12871fedf9176892)




### step 9 : use StarContainer
[diff](http://github.com/revolunet/react-workshop-1/commit/2c3875a520849a26ad4100cd1e55884f8e89d562)
[tree](http://github.com/revolunet/react-workshop-1/tree/2c3875a520849a26ad4100cd1e55884f8e89d562)

- externalize star load/save in a HOC



### step 10 : add LinksBrowserContainer
[diff](http://github.com/revolunet/react-workshop-1/commit/7986e38c070e75356edcf72053c71c57eaf8dc29)
[tree](http://github.com/revolunet/react-workshop-1/tree/7986e38c070e75356edcf72053c71c57eaf8dc29)

 - load data from an URL using a HOC


