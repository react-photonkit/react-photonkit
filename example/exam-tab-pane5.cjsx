React = require "react"
{
  Input, Radio, TextArea, CheckBox
  RadioGroup, Button, Options
} = require "../src/photon.coffee"

module.exports = React.createClass
  submit: ->
    console.log "email: #{@refs.email.getValue()}"
    console.log "password: #{@refs.password.getValue()}"
    console.log "description: #{@refs.description.getValue()}"
    console.log "options: #{@refs.options.getSelectedIndex()}"
    console.log "checkbox1: #{@refs.cb1.isChecked()}"
    console.log "checkbox2: #{@refs.cb2.isChecked()}"
    console.log "radios: #{@refs.radios.getCheckedIndex()}"

  render: ->
    options = [
      "Option 1", "Option 2", "Option 3", "Option 4", "Option 5"
      "Option 6", "Option 7", "Option 8", "Option 9", "Option 10"
    ]

    <div className="padded-more">
      <form>
        <Input ref="email" type="email"
          placeholder="Email" label="Email Address" />
        <Input ref="password" type="password"
          placeholder="Password" label="password" />
        <TextArea ref="description" rows=3 label="Description" />
        <Options ref="options" items={options} />
        <CheckBox ref="cb1" label="This is a checkbox" />
        <CheckBox ref="cb2" label="This is a checkbox too" />
        <RadioGroup ref="radios" name="radios">
          <Radio checked label="Keep your options open" />
          <Radio label="More options" />
        </RadioGroup>
        <div className="form-actions pull-right">
          <Button form type="submit"
            ptStyle="default" text="Cancel" />
          <Button form type="submit"
            ptStyle="primary" text="OK" onClick={@submit} />
        </div>
      </form>
    </div>
