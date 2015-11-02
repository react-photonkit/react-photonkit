React = require "react"
classNames = require "classnames"
PhotonMixin = require "./photon-mixin.coffee"

module.exports = React.createClass
  mixins: [PhotonMixin],

  getInitialState: ->
    checked: @props.checked

  propTypes:
    label: React.PropTypes.string
    checked: React.PropTypes.bool

  isChecked: ->
    @refs.checkbox.checked if @refs.checkbox

  render: ->
    <div className="checkbox">
      <label>
        <input ref="checkbox" {...@props} type="checkbox" /> {@props.label}
      </label>
    </div>
