React = require 'react'

window.React = React

module.exports = React.createClass

  render: ->
    <div className="toolbar-actions">
      {@props.children}
    </div>
