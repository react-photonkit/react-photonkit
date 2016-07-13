React = require "react"
classNames = require "classnames"
PhotonMixin = require "./photon-mixin.coffee"

module.exports = React.createClass
  mixins: [PhotonMixin],

  propTypes:
    label: React.PropTypes.string

  getValue: ->
    @refs.text.value

  getDefaultProps: ->
    type: "text"

  render: ->
    <div className="form-group">
      <label>{@props.label}</label>
      <input {...@props}
        ref="text"
        className="form-control"
        placeholder={@props.placeholder}
        type={@props.type} />
    </div>
