import React from 'react'

import Link from './Link'

const Links = ({ links, className, onTagClick }) => (
  <div className={ className }>
    { links && links.map(link => <Link onTagClick={ onTagClick } key={ link.url } { ...link }/>) }
  </div>
)

export default Links
