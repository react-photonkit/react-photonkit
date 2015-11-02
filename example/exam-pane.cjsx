React = require "react"
{
  Icon, Pane, Button
  TabGroup, TabItem
} = require "../src/photon.coffee"
ExamTabPane1 = require "./exam-tab-pane1.cjsx"
ExamTabPane2 = require "./exam-tab-pane2.cjsx"
ExamTabPane3 = require "./exam-tab-pane3.cjsx"
ExamTabPane4 = require "./exam-tab-pane4.cjsx"
ExamTabPane5 = require "./exam-tab-pane5.cjsx"

module.exports = React.createClass
  onSelect: (index) ->
    console.log "tab clicked with #{index}"

  render: ->
    <Pane>
      <TabGroup activeKey={1} onSelect={@onSelect} draggable>
        <TabItem eventKey={1} title="buttons">
          <ExamTabPane1 />
        </TabItem>
        <TabItem eventKey={2} title="icon buttons">
          <ExamTabPane2 />
        </TabItem>
        <TabItem eventKey={3} title="tables">
          <ExamTabPane3 />
        </TabItem>
        <TabItem eventKey={4} title="list">
          <ExamTabPane4 />
        </TabItem>
        <TabItem eventKey={5} title="form">
          <ExamTabPane5 />
        </TabItem>
      </TabGroup>
    </Pane>
