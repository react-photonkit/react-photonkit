React = require 'react'
{
  Pane
  NavGroup, NavTitle, NavGroupItem
} = require '../src/photon.coffee'

window.React = React

module.exports = React.createClass

  onClick: (event) ->
    alert 'clicked "close"'

  render: ->
    <Pane size={"sm"} sidebar={true}>
      <NavGroup>
        <NavTitle>nav group icon &amp; text</NavTitle>
        <NavGroupItem icon="icon-home" text="home" />
        <NavGroupItem icon="icon-cc" text="cc" />

        <NavTitle>nav group text</NavTitle>
        <NavGroupItem text="download" />
      </NavGroup>
    </Pane>
