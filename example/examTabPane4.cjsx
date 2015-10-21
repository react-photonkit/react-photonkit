React = require 'react'
{
  ListGroup, ListItem
} = require '../src/photon.coffee'

module.exports = React.createClass
  render: ->
    <ListGroup>
      <ListItem title="1st item" />
      <ListItem
        title="2nd item"
        image="http://photonkit.com/assets/img/avatar.jpg"/>
      <ListItem title="3rd item" subtitle="subtitle" />
      <ListItem
        title="4th item"
        subtitle="subtitle"
        image="http://photonkit.com/assets/img/avatar.jpg"/>
    </ListGroup>
