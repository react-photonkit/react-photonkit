React = require 'react'
{ Pane, NavGroup, NavTitle, NavGroupItem } = require '../src/photon.coffee'

module.exports = React.createClass
  onClick: (event) ->
    alert 'clicked "close"'

  render: ->
    <Pane ptSize="sm" sidebar>
      <NavGroup>
        <NavTitle>nav group icon &amp; text</NavTitle>
        <NavGroupItem glyph="home" text="home" active />
        <NavGroupItem glyph="cc" text="cc" />

        <NavTitle>nav group text</NavTitle>
        <NavGroupItem text="download" />
      </NavGroup>
    </Pane>
