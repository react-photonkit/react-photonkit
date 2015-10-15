React = require 'react'

window.React = React

module.exports = React.createClass

  propTypes:
    glyph: React.PropTypes.string.isRequired

  render: ->
    <span className="icon #{@props.glyph}" />
