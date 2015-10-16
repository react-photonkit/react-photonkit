React = require 'react'

module.exports = React.createClass
  render: ->
    <h1 className="title">
      {@props.children}
    </h1>
