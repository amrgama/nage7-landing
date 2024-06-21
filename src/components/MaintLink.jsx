import React from 'react'
import { Link } from 'react-router-dom'

export const MaintLink = ({text, children, ...linkProps}) => {

    return (
    <Link {...linkProps}>
        {text}
        {children}
    </Link>
  )
}
