React = require "react"

module.exports = React.createClass
  render: ->
    <div className="pane-group">
      {@props.children}
    </div>
