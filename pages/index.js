import React from 'react'
import Head from 'next/head'

import Links from '../components/Links'
import links from '../static/links.json'

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>React Workshop #1</title>
    </Head>
    <Links links={ links }/>
  </div>
)
