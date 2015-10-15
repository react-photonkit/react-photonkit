React = require 'react'
{
  Icon
  Toolbar, Actionbar
  Button, ButtonInfo
} = require '../src/photon.coffee'

{
  ButtonStyle,
  ButtonSize
} = ButtonInfo

window.React = React

module.exports = React.createClass

  onClick: (event) ->
    alert 'clicked "close"'

  render: ->
    <Toolbar type="footer">
      <Actionbar>
        <Button
          style={ButtonStyle.negative}
          right={true}
          text="close"
          onClick={@onClick} />
      </Actionbar>
    </Toolbar>
