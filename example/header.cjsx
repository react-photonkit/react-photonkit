React = require 'react'
{
  Title, Toolbar, Actionbar
  Button, ButtonGroup
} = require '../src/photon.coffee'
Package = require '../package.json'

module.exports = React.createClass
  onClick: (event) ->
    alert 'clicked "close"'

  render: ->
    <Toolbar>
      <Title>{Package.name}</Title>
      <Actionbar>
        <ButtonGroup>
          <Button glyph="home" />
          <Button glyph="github" active />
          <Button glyph="folder" text="hello" />
        </ButtonGroup>
      </Actionbar>
    </Toolbar>
