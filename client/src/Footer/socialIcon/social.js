import React from 'react'

import PropTypes from 'prop-types'

import './social.css'

const Social = (props) => {
  return (
    <div className={`social-social ${props.rootClassName} `}>
      <img
        alt={props.Insider_alt}
        src={props.Insider_src}
        className="social-insider"
      />
    </div>
  )
}

Social.defaultProps = {
  Insider_alt: 'pastedImage',
  Insider_src: '/playground_assets/pastedimage-9nha.svg',
  rootClassName: '',
}

Social.propTypes = {
  Insider_alt: PropTypes.string,
  Insider_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Social
