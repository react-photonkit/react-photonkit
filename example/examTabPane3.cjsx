React = require 'react'
{ Table } = require '../src/photon.coffee'

module.exports = React.createClass
  makeRow: (index) ->
    <tr key={index}>
      <td>{index}</td>
      <td>photon.css</td>
      <td>CSS</td>
      <td>28K</td>
    </tr>

  render: ->
    rows = (@makeRow i for i in [1..100])

    <div>
      <div className="padded-more">
        <h3>table example</h3>
      </div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Kind</th>
            <th>File Size</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    </div>
