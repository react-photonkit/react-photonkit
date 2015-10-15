React = require 'react'

window.React = React

module.exports = React.createClass

  render: ->
    <h1 className="title">
      {@props.children}
    </h1>
