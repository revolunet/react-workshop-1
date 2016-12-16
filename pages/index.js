import React from 'react'
import Head from 'next/head'

import LinksBrowser from '../components/LinksBrowser'
import links from '../static/links.json'

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>React Workshop #1</title>
      <link rel="stylesheet" href="/static/fade.css"/>
    </Head>
    <LinksBrowser links={ links } />
  </div>
)
