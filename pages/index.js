import React from 'react'
import Head from 'next/head'
import styleSheet from 'styled-components/lib/models/StyleSheet'
import 'isomorphic-fetch'
import LinksBrowser from '../components/LinksBrowser'




const Page = ({ style, links }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>React Workshop #1</title>
      <link rel="stylesheet" href="/static/fade.css"/>
      <style dangerouslySetInnerHTML={{ __html: style }} />
    </Head>
    <LinksBrowser links={ links }/>
  </div>
)

// async load our dataset on the server
// allows to query whatever CORS-ready API
// NB: in next.js only top-level components can have getInitialProps
class PageContainer extends React.Component {
  static async getInitialProps() {
    const style = styleSheet.rules().map(rule => rule.cssText).join('\n')
    const res = await fetch('http://127.0.0.1:3000/static/links.json')
    const links = await res.json()
    return { links, style }
  }
  render() {
    return <Page { ...this.props }/>
  }
}

export default PageContainer
