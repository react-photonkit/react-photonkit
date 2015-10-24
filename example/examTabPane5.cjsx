React = require 'react'
{
  Input, RadioGroup, Button
} = require '../src/photon.coffee'

module.exports = React.createClass
  submit: ->
    console.log @refs.email.getValue()
    console.log @refs.password.getValue()
    console.log @refs.description.getValue()
    console.log @refs.cb1.isChecked()
    console.log @refs.cb2.isChecked()
    console.log @refs.radios.getCheckedIndex()

  render: ->
    <div className="padded-more">
      <form>
        <Input ref="email" type="email"
          placeholder="Email" label="Email Address" />
        <Input ref="password" type="password"
          placeholder="Password" label="password" />
        <Input ref="description" type="textarea" rows=3 label="Description" />
        <Input ref="cb1" type="checkbox" label="This is a checkbox" />
        <Input ref="cb2" type="checkbox" label="This is a checkbox too" />

        <RadioGroup ref="radios" name="radios">
          <Input type="radio" checked
            label="Keep your options open" />
          <Input type="radio"
            label="More options" />
        </RadioGroup>
        <div className="form-actions pull-right">
          <Button form type="submit"
            ptStyle="default" text="Cancel" />
          <Button form type="submit"
            ptStyle="primary" text="OK" onClick={@submit} />
        </div>
      </form>
    </div>
