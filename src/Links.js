import React from 'react'

import Link from './Link'

const Links = ({ links, onTagClick }) => (
  <div>
    { links.map(link => <Link onTagClick={onTagClick} key={link.url} {...link} />) }
  </div>
)

export default Links
