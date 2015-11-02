React = require "react"
{ Pane, NavGroup, NavTitle, NavGroupItem } = require "../src/photon.coffee"

module.exports = React.createClass
  onSelect: (index) ->
    console.log "sidebar clicked with #{index}"

  render: ->
    <Pane ptSize="sm" sidebar>
      <NavGroup activeKey={2} onSelect={@onSelect} draggable>
        <NavTitle>nav group icon &amp; text</NavTitle>
        <NavGroupItem eventKey={1} glyph="home" text="home" />
        <NavGroupItem eventKey={2} glyph="cc" text="cc" />

        <NavTitle>nav group text</NavTitle>
        <NavGroupItem eventKey={3} text="download" />
      </NavGroup>
    </Pane>
