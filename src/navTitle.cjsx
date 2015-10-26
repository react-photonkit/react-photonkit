React = require "react"

module.exports = React.createClass
  render: ->
    <h5 className="nav-group-title">
      {@props.children}
    </h5>
