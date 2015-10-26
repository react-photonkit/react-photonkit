React = require "react"

module.exports = React.createClass
  render: ->
    <div className="toolbar-actions">
      {@props.children}
    </div>
