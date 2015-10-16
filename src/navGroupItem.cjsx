React = require 'react'
Icon = require './icon.cjsx'

module.exports = React.createClass
  propTypes:
    text: React.PropTypes.string.isRequired
    icon: React.PropTypes.string

  getDefaultProps: ->
    text: null
    icon: null

  render: ->
    textGlyph = if @props.text then 'icon-text' else ''
    icon = <Icon glyph="#{@props.icon} #{textGlyph}" /> if @props.icon?
    <a className="nav-group-item">
      {icon} {@props.text}
    </a>
