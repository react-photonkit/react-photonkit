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
          <Button icon="home" />
          <Button icon="github" />
          <Button icon="folder" text="hello" />
        </ButtonGroup>
      </Actionbar>
    </Toolbar>
