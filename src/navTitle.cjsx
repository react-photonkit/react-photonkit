React = require 'react'

window.React = React

module.exports = React.createClass

  render: ->
    <h5 className="nav-group-title">
      {@props.children}
    </h5>
