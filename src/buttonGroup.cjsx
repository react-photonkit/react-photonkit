React = require "react"

module.exports = React.createClass
  render: ->
    <div className="btn-group">
      {@props.children}
    </div>
