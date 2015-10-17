React = require 'react'
classNames = require 'classnames'
PhotonMixin = require './photonMixin.coffee'

module.exports = React.createClass
  mixins: [PhotonMixin],

  propTypes:
    glyph: React.PropTypes.string.isRequired
    withText: React.PropTypes.bool

  getDefaultProps: ->
    ptClass: 'icon'
    withText: false

  render: ->
    classes = @getPtClassSet()
    classes["icon-#{@props.glyph}"] = true
    classes["icon-text"] = @props.withText
    className = classNames @props.className, classes
    
    <span {...@props} className={className} />
