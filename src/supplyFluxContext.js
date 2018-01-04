import React from 'react'
import PropTypes from 'prop-types'

export default flux => Component => React.createClass({
  childContextTypes: {
    flux: PropTypes.object,
  },

  getChildContext() {
    return { flux }
  },

  render() {
    return <Component {...this.props} />
  },
})
