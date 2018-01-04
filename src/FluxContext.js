import React from 'react'
import PropTypes from 'prop-types'

export default React.createClass({
  childContextTypes: {
    flux: PropTypes.object,
  },

  getChildContext() {
    return { flux: this.props.flux }
  },

  render() {
    return this.props.children
  }
})
