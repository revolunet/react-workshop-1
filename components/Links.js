import React from 'react'

const Link = ({ url, text, tags }) => (
  <div>
    <b>{ url }</b>
    <br/>
    { text }
    <hr/>
    { tags.join(', ') }
  </div>
)

const Links = ({ links }) => (
  <div>
    { links.map(link => <Link key={ link.url } { ...link }/>) }
  </div>
)

export default Links