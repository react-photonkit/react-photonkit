React = require 'react'

window.React = React

module.exports = React.createClass

  propTypes:
    size: React.PropTypes.string
    sidebar: React.PropTypes.bool

  getDefaultProps: ->
    size: null
    sidebar: false

  render: ->
    size = if @props.size then "pane-#{@props.size}" else ""
    sidebar = if @props.sidebar then "sidebar" else ""
    <div className="pane #{size} #{sidebar}">
      {@props.children}
    </div>
