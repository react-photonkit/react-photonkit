React = require 'react'
{ Pane, NavGroup, NavTitle, NavGroupItem } = require '../src/photon.coffee'

module.exports = React.createClass
  onClick: (event) ->
    alert 'clicked "close"'

  render: ->
    <Pane size={"sm"} sidebar={true}>
      <NavGroup>
        <NavTitle>nav group icon &amp; text</NavTitle>
        <NavGroupItem icon="home" text="home" />
        <NavGroupItem icon="cc" text="cc" />

        <NavTitle>nav group text</NavTitle>
        <NavGroupItem text="download" />
      </NavGroup>
    </Pane>
