React = require 'react'
{
  Title
  Toolbar, Actionbar
  Button, ButtonGroup
} = require '../src/photon.coffee'
Package = require '../package.json'

window.React = React

module.exports = React.createClass

  onClick: (event) ->
    alert 'clicked "close"'

  render: ->
    <Toolbar>
      <Title>{Package.name}</Title>
      <Actionbar>
        <ButtonGroup>
          <Button icon="icon-home" />
          <Button icon="icon-github" />
          <Button icon="icon-folder" text="hello" />
        </ButtonGroup>
      </Actionbar>
    </Toolbar>
