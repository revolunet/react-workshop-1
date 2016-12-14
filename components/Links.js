import React from 'react'

import Link from './Link'

const Links = ({ links, className }) => (
  <div className={ className }>
    { links.map(link => <Link key={ link.url } { ...link }/>) }
  </div>
)

export default Links
