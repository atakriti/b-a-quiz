import React from 'react'

import PropTypes from 'prop-types'

import './Highlight.scss'

const Highlight = (props) => {
  return (
    <div className="highlight-highlight">
      <span className="highlight-text">{props.Title}</span>
      <span className="highlight-text1">{props.Description}</span>
    </div>
  )
}

Highlight.defaultProps = {
  Description:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
  Title: 'Everything you get with Finbest',
}

Highlight.propTypes = {
  Description: PropTypes.string,
  Title: PropTypes.string,
}

export default Highlight
