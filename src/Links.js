import React from 'react'

import Link from './Link'

const Links = ({ links }) => (
  <div>
    { links.map(link => <Link key={link.url} {...link} />) }
  </div>
)

export default Links
