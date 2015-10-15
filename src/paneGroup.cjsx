React = require 'react'

window.React = React

module.exports = React.createClass

  render: ->
    <div className="pane-group">
      {@props.children}
    </div>
