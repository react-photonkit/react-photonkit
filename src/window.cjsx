React = require "react"

module.exports = React.createClass
  render: ->
    <div className="window">
      {@props.children}
    </div>
