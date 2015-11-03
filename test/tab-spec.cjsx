expect = require "expect.js"
React = require "react"
ReactTestUtils = require "react/lib/ReactTestUtils"
ReactDOM = require "react-dom"
TabGroup = require "../src/tab-group.cjsx"
TabItem = require "../src/tab-item.cjsx"

describe "tab", () ->

  it "Should create default element", () ->
    tree = <TabGroup />
    instance = ReactTestUtils.renderIntoDocument tree
    node = ReactDOM.findDOMNode instance
    expect(node).to.be.ok()

    tree = (
      <TabGroup>
        <TabItem title="tab1">tab1</TabItem>
        <TabItem title="tab2">tab2</TabItem>
      </TabGroup>
    )

    instance = ReactTestUtils.renderIntoDocument tree
    node = ReactDOM.findDOMNode instance
    expect(node).to.be.ok()


  it "Should be active when clicked", (done) ->
    onSelect = (key) ->
      expect(2).to.be(key)

    tree = (
      <TabGroup activeKey={1} onSelect={onSelect}>
        <TabItem eventKey={1} title="tab1">contents1</TabItem>
        <TabItem eventKey={2} title="tab2">contents2</TabItem>
      </TabGroup>
    )

    instance = ReactTestUtils.renderIntoDocument tree
    items = ReactTestUtils.scryRenderedDOMComponentsWithTag instance, "a"
    ReactTestUtils.Simulate.click items[1]

    contents = instance.refs.contents
    expect(contents.textContent).to.be("contents2")
    done()

  it "Draggable should be endabled", () ->
    tree = (
      <TabGroup activeKey={1} draggable>
        <TabItem eventKey={1} title="tab1">contents1</TabItem>
        <TabItem eventKey={2} title="tab2">contents2</TabItem>
      </TabGroup>
    )

    instance = ReactTestUtils.renderIntoDocument tree
    expect(instance.sortableOptions.disabled).to.be(false)
