React = require 'react'
{ Toolbar, Actionbar, Button } = require '../src/photon.coffee'

module.exports = React.createClass
  onClick: (event) ->
    alert 'clicked "close"'

  render: ->
    <Toolbar type="footer">
      <Actionbar>
        <Button
          style='negative'
          pullRight
          text="close"
          onClick={@onClick} />
      </Actionbar>
    </Toolbar>
