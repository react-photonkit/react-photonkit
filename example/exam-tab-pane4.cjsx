React = require "react"
{
  ListGroup, ListItem
} = require "../src/photon.coffee"

module.exports = React.createClass
  render: ->
    <ListGroup>
      <ListItem title="1st item" />
      <ListItem
        title="2nd item"
        image="https://avatars3.githubusercontent.com/u/1744446?v=3&s=400"
        active />
      <ListItem title="3rd item" subtitle="subtitle" />
      <ListItem
        title="4th item"
        subtitle="subtitle"
        image="https://avatars3.githubusercontent.com/u/1744446?v=3&s=400" />
    </ListGroup>
