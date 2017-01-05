import React from 'react'

const Link = ({ url, text, tags }) => (
  <div>
    <b>{ url }</b>
    <br />
    { text }
    <br />
    { tags.join(', ') }
    <hr />
  </div>
)

const Links = ({ links }) => (
  <div>
    { links.map(link => <Link key={link.url} {...link} />) }
  </div>
)

export default Links
