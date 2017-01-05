// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from 'spectacle'

import Counter from '../assets/state.example.js'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Import custom component
import Interactive from '../assets/interactive'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  npm: require('../assets/npm.png'),
  babel: require('../assets/babel.png'),
  webpack: require('../assets/webpack.png'),
  jsx: require('../assets/jsx.png'),
  react: require('../assets/react.png'),
  css: require('../assets/css-modules.png'),
  lifecycle: require('../assets/lifecycle-codementor.png'),
  redux: require('../assets/react-redux-csstricks.png'),
  next: require('../assets/next.png')
}

preloader(images)

const theme = createTheme({
  primary: '#ff4081'
})

export default class Presentation extends React.Component {
  render () {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>

          <Slide transition={['zoom']} bgColor='primary'>
            <Heading size={1} fit caps lineHeight={1} textColor='black'>
              React Workshop #1
            </Heading>
            <Text textSize='1.5em' margin='20px 0px 0px' bold>A first approach to the React web stack</Text>
          </Slide>

          <Slide transition={['slide']} bgColor='black' >
            <Heading size={2} caps fit textColor='primary' textFont='primary'>
              Why React ?
            </Heading>
            <List>
              <Appear><ListItem textColor='primary'>Learn once, write everywhere</ListItem></Appear>
              <Appear><ListItem textColor='primary'>ui = f(state)</ListItem></Appear>
              <Appear><ListItem textColor='primary'>Community support</ListItem></Appear>
              <Appear><ListItem textColor='primary'>DOM, WebGL, native, terminal, sound, HW...</ListItem></Appear>
              <Appear><ListItem textColor='primary'>DOM : SPA, SSR, static...</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={['slide']} bgColor='black' >
            <Heading size={2} caps fit textColor='primary' textFont='primary'>
              Tooling
            </Heading>
            <List>
              <Appear><ListItem textColor='primary'>npm</ListItem></Appear>
              <Appear><ListItem textColor='primary'>Babel for next generation Javascript</ListItem></Appear>
              <Appear><ListItem textColor='primary'>Webpack for building</ListItem></Appear>
              <Appear><ListItem textColor='primary'>JSX</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={['slide']} bgColor='black' >
            <Image width='50%' src={images.npm.replace(/^\//, './')} margin={20} />
            <Heading size={6} caps textColor='primary' textFont='primary'>
              +20k react modules
            </Heading>
          </Slide>

          <Slide transition={['slide']} bgColor='black' >
            <Image width='50%' src={images.babel.replace(/^\//, './')} margin={20} />
            <Heading size={6} caps textColor='primary' textFont='primary'>
              Use next generation JavaScript, today.
            </Heading>
          </Slide>

          <Slide transition={['slide']} bgColor='black' >
            <Image width='50%' src={images.webpack.replace(/^\//, './')} bgColor='white' />
            <Text textColor='primary' textFont='primary'>
              Flexible module loader
            </Text>
            <CodePane
              style={{ fontSize: 16 }}
              lang='js'
              source={require('raw!../assets/webpack.example')}
              margin='20px auto'
            />
          </Slide>

          <Slide transition={['slide']} bgColor='black'>
            <Image width='30%' src={images.jsx.replace(/^\//, './')} margin={20} />
            <Text textColor='primary' textFont='primary'>
              Syntaxic sugar
            </Text>
            <CodePane
              lang='jsx'
              style={{ fontSize: 16 }}
              source={require('raw!../assets/jsx.example')}
              margin='20px auto'
            />
          </Slide>

          <Slide transition={['slide']} bgColor='black' >
            <Image width='10%' src={images.css.replace(/^\//, './')} margin={10} bgColor='white' />
            <Heading size={6} caps textColor='primary' textFont='primary'>
              CSS is hard
            </Heading>
            <List>
              <Appear><ListItem textColor='primary'>CSS in JS</ListItem></Appear>
              <Appear><ListItem textColor='primary'>CSS modules</ListItem></Appear>
              <Appear><ListItem textColor='primary'>styled-components</ListItem></Appear>
              <Appear><ListItem textColor='primary'>react-css-modules</ListItem></Appear>
              <Appear><ListItem textColor='primary'>glamor, aphrodite, jsx-style...</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={['slide']} bgColor='black' notes='Props are given by parents and cannot be changed by the component itself. think of it as arguments. can be values or callbacks.'>
            <Text textColor='primary' textFont='primary'>
              React - props
            </Text>
            <CodePane
              lang='jsx'
              style={{ fontSize: 16 }}
              source={require('raw!../assets/props.example')}
              margin='20px auto'
            />
          </Slide>

          <Slide transition={['slide']} bgColor='black' notes='State is the component internal state. Calls to setState trigger component+children re-render'>
            <Text textColor='primary' textFont='primary'>
              React - state
            </Text>
            <CodePane
              lang='jsx'
              style={{ fontSize: 16 }}
              source={require('!!raw!../assets/state.example.js')}
              margin='20px auto'
            />
            <Counter />
          </Slide>

          <Slide transition={['slide']} bgColor='black' notes='some lifecycle methods for advanced use-cases'>
            <Text textColor='primary' textFont='primary'>
              React - components Lifecycle
            </Text>
            <Image width='80%' src={images.lifecycle.replace(/^\//, './')} margin={20} bgColor='white' />
            <Text textSize='14' textColor='primary' textFont='primary'>(codementor)</Text>
          </Slide>

          <Slide transition={['slide']} bgColor='black' notes='Use HOC to compose UIs'>
            <Text textColor='primary' textFont='primary'>
              Design pattern - composition - HOCs
            </Text>
            <CodePane
              lang='jsx'
              style={{ fontSize: 16 }}
              source={require('!!raw!../assets/hoc.example')}
              margin='20px auto'
            />
          </Slide>

          <Slide transition={['slide']} bgColor='black' notes='You can use redux, mobx or whatever to externalize state management'>
            <Text textColor='primary' textFont='primary'>
              React - state management
            </Text>
            <Image width='80%' src={images.redux.replace(/^\//, './')} margin={20} bgColor='white' />
            <Text textSize='14' textColor='primary' textFont='primary'>(csstricks)</Text>
          </Slide>

          <Slide transition={['slide']} bgColor='black' notes='You can use redux, mobx or whatever to externalize state management'>
            <Image width='30%' src={images.next.replace(/^\//, './')} margin={20} bgColor='white' />
            <List>
              <Appear><ListItem textColor='primary'>Isomorphic / Universal / SSR apps</ListItem></Appear>
              <Appear><ListItem textColor='primary'>Filesystem API : /pages is your router</ListItem></Appear>
              <Appear><ListItem textColor='primary'>/static are served... statically</ListItem></Appear>
              <Appear><ListItem textColor='primary'>Also available as an Node module</ListItem></Appear>
            </List>
          </Slide>

        </Deck>
      </Spectacle>
    )
  }
}
