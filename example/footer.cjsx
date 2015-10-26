React = require "react"
{ Toolbar, Actionbar, Button } = require "../src/photon.coffee"

module.exports = React.createClass
  onClick: (event) ->
    alert "clicked 'close'"

  render: ->
    <Toolbar ptType="footer">
      <Actionbar>
        <Button
          ptStyle="negative"
          pullRight
          text="close"
          onClick={@onClick} />
      </Actionbar>
    </Toolbar>
