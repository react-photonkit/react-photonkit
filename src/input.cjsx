React = require 'react'
classNames = require 'classnames'
PhotonMixin = require './photonMixin.coffee'

module.exports = React.createClass
  mixins: [PhotonMixin],

  getInitialState: ->
    checked: @props.checked

  propTypes:
    type: React.PropTypes.string
    placeholder: React.PropTypes.string
    label: React.PropTypes.string
    checked: React.PropTypes.bool

  getDefaultProp: ->
    type: "text"

  onChangeRadio: (event) ->
    @props.onChange event if @props.onChange

  makeTextArea: ->
    <div className="form-group">
      <label>{@props.label}</label>
      <textarea {...@props}
        ref="text"
        className="form-control"
        placeholder={@props.placeholder} >
        {@props.children}
      </textarea>
    </div>

  makeCheckbox: ->
    <div className="checkbox">
      <label>
        <input ref="checkbox" {...@props} type="checkbox" /> {@props.label}
      </label>
    </div>

  makeRadio: ->
    <div className="radio">
      <label>
        <input {...@props} type="radio"
          onChange={@onChangeRadio} /> {@props.label}
      </label>
    </div>

  makeText: ->
    <div className="form-group">
      <label>{@props.label}</label>
      <input {...@props}
        ref="text"
        className="form-control"
        type={@props.type} />
    </div>

  getValue: ->
    switch @props.type
      when "checkbox" then undefined
      when "radio" then undefined
      else @refs.text.value

  isChecked: ->
    @refs.checkbox.checked if @refs.checkbox

  render: ->
    switch @props.type
      when "textarea" then @makeTextArea()
      when "checkbox" then @makeCheckbox()
      when "radio" then @makeRadio()
      else @makeText()
