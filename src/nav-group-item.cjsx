React = require "react"
classNames = require "classnames"
PhotonMixin = require "./photon-mixin.coffee"
Icon = require "./icon.cjsx"

module.exports = React.createClass
  mixins: [PhotonMixin],

  propTypes:
    active: React.PropTypes.bool
    text: React.PropTypes.string.isRequired
    glyph: React.PropTypes.string

  getDefaultProps: ->
    ptClass: "nav-group-item"
    active: false

  getIconComponent: ->
    <Icon glyph={@props.glyph} withText /> if @props.glyph

  render: ->
    classes = @getPtClassSet()
    classes["active"] = @props.active
    className = classNames @props.className, classes
    icon = @getIconComponent()

    <a {...@props} className={className}>
      {icon}{@props.text}
    </a>
