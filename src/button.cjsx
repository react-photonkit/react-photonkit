React = require "react"
classNames = require "classnames"
Icon = require "./icon.cjsx"
PhotonMixin = require "./photon-mixin.coffee"


module.exports = React.createClass
  mixins: [PhotonMixin],

  propTypes:
    active: React.PropTypes.bool
    form: React.PropTypes.bool
    onClick: React.PropTypes.func

  getDefaultProps: ->
    ptClass: "button"
    ptStyle: "default"
    active: false
    pullRight: false

  getIconComponent: ->
    withText = if @props.text then true else false
    <Icon glyph={@props.glyph} withText={withText} /> if @props.glyph

  render: ->
    icon = @getIconComponent()
    classes = @getPtClassSet()
    classes["active"] = @props.active
    classes["btn-form"] = @props.form
    classes["pull-right"] = @props.pullRight
    className = classNames @props.className, classes

    <button
      {...@props}
      className={className}
      onClick={@props.onClick}>
        {icon}{@props.text}
    </button>
