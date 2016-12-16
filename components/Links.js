import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Link from './Link'

const Links = ({ links, className, onTagClick }) => (
  <ReactCSSTransitionGroup
    component="div"
    className={ className }
    transitionName="fade"
    transitionAppear={ true }
    transitionAppearTimeout={ 100 }
    transitionEnterTimeout={ 100 }
    transitionLeaveTimeout={ 100 }
  >
    { links && links.map(link => <Link key={ link.url } onTagClick={ onTagClick } { ...link }/>) }
  </ReactCSSTransitionGroup>
)

export default Links
