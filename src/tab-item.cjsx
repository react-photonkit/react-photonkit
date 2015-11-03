React = require "react"
classNames = require "classnames"
PhotonMixin = require "./photon-mixin.coffee"
Icon = require "./icon.cjsx"

module.exports = React.createClass
  mixins: [PhotonMixin],

  propTypes:
    active: React.PropTypes.bool
    title: React.PropTypes.string.isRequired
    glyph: React.PropTypes.string

  getDefaultProps: ->
    ptClass: "tab-item"
    active: false

  getIconComponent: ->
    <Icon glyph="cancel" tab />
    null  # TODO(importre)

  render: ->
    classes = @getPtClassSet()
    classes["active"] = @props.active
    className = classNames @props.className, classes
    icon = @getIconComponent()

    <a {...@props} className={className}>
      {icon}{@props.title}
    </a>
