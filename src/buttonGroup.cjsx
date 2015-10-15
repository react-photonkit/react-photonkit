React = require 'react'

window.React = React

module.exports = React.createClass

  render: ->
    <div className="btn-group">
      {@props.children}
    </div>
