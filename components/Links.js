import React from 'react'

const Links = ({ links }) => (
  <ul>
    <li><b>All Links</b></li>
    { links.map(link => <li key={ link.url }>{ link.url }</li>) }
  </ul>
)

export default Links