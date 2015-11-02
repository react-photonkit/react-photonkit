React = require "react"
classNames = require "classnames"
PhotonMixin = require "./photon-mixin.coffee"

module.exports = React.createClass
  mixins: [PhotonMixin],

  propTypes:
    placeholder: React.PropTypes.string
    label: React.PropTypes.string

  getValue: ->
    @refs.text.value

  render: ->
    <div className="form-group">
      <label>{@props.label}</label>
      <textarea {...@props}
        ref="text"
        className="form-control"
        placeholder={@props.placeholder} >
        {@props.children}
      </textarea>
    </div>
