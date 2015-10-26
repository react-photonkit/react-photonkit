React = require "react"

module.exports = React.createClass
  render: ->
    <div className="window-content">
      {@props.children}
    </div>
