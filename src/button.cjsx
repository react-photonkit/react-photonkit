React = require 'react'
Icon = require './icon.cjsx'
{ ButtonStyle, ButtonSize } = require './buttonInfo.coffee'

window.React = React

module.exports = React.createClass

  propTypes:
    style: React.PropTypes.string
    size: React.PropTypes.string
    right: React.PropTypes.bool
    text: React.PropTypes.string
    icon: React.PropTypes.string

  getDefaultProps: ->
    style: ButtonStyle.default
    size: ButtonSize.default
    right: false
    text: null
    icon: null

  render: ->
    leftOrRight = if @props.right then 'pull-right' else 'pull-left'
    textGlyph = if @props.text then 'icon-text' else ''
    icon = <Icon glyph="#{@props.icon} #{textGlyph}" /> if @props.icon?
    <button
      className="#{@props.style} #{@props.size} #{leftOrRight}"
      onClick={@props.onClick}>
        {icon} {@props.text}
    </button>
