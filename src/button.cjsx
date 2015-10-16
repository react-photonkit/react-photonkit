React = require 'react'
Icon = require './icon.cjsx'

window.React = React

module.exports = React.createClass

  styles: ['default', 'primary', 'positive', 'negative', 'warning']
  sizes: ['large', 'mini']

  propTypes:
    active: React.PropTypes.bool
    style: React.PropTypes.string
    size: React.PropTypes.string
    pullRight: React.PropTypes.bool
    text: React.PropTypes.string
    icon: React.PropTypes.string

  getDefaultProps: ->
    active: false
    style: 'default'
    size: ''
    pullRight: false
    text: null
    icon: null

  getIconComponent: ->
    text = if @props.text then 'icon-text' else ''
    <Icon glyph="#{@props.icon} #{text}" /> if @props.icon?

  render: ->
    active = if @props.active then 'active' else ''
    right = if @props.pullRight then 'pull-right' else ''
    icon = @getIconComponent()
    style = if @props.style in @styles then "btn-#{@props.style}" else ''
    size = if @props.size in @sizes then "btn-#{@props.size}" else ''

    <button
      className="btn #{style} #{size} #{right} #{active}"
      onClick={@props.onClick}>
        {icon}{@props.text}
    </button>
