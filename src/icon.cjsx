React = require 'react'

module.exports = React.createClass
  propTypes:
    glyph: React.PropTypes.string.isRequired

  render: ->
    <span className="icon icon-#{@props.glyph}" />
