React = require 'react'

window.React = React

module.exports = React.createClass

  propTypes:
    type: React.PropTypes.oneOf ['header', 'footer']

  getDefaultProps: ->
    type: 'header'

  render: ->
    <div className="toolbar toolbar-#{@props.type}">
      {@props.children}
    </div>
