React = require "react"
classNames = require "classnames"
PhotonMixin = require "./photon-mixin.coffee"

module.exports = React.createClass
  mixins: [PhotonMixin],

  propTypes:
    glyph: React.PropTypes.string.isRequired
    withText: React.PropTypes.bool
    tab: React.PropTypes.bool

  getDefaultProps: ->
    ptClass: "icon"
    withText: false
    tab: false

  render: ->
    classes = @getPtClassSet()
    classes["icon-#{@props.glyph}"] = true
    classes["icon-text"] = @props.withText
    classes["icon-close-tab"] = @props.tab
    className = classNames @props.className, classes

    <span {...@props} className={className} />
