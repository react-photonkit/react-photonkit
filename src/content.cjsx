React = require 'react'

window.React = React

module.exports = React.createClass

  render: ->
    <div className="window-content">
      {@props.children}
    </div>
