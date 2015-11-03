expect = require "expect.js"
React = require "react"
ReactTestUtils = require "react/lib/ReactTestUtils"
ReactDOM = require "react-dom"
ListGroup = require "../src/list-group.cjsx"
ListItem = require "../src/list-item.cjsx"

describe "listgroup", () ->

  it "Should create default element", () ->
    instance = ReactTestUtils.renderIntoDocument <ListGroup />
    node = ReactDOM.findDOMNode instance

    expect(node.nodeName).to.be("UL")
    expect(node.className).to.be("list-group")


  it "Should hide img element if no image prop", () ->
    tree = (
      <ListGroup>
        <ListItem title="item" />
      </ListGroup>
    )

    instance = ReactTestUtils.renderIntoDocument tree
    items = ReactTestUtils.scryRenderedDOMComponentsWithTag instance, "img"
    expect(items.length).to.be(0)


  it "Should hide img element if image prop exists", () ->
    tree = (
      <ListGroup>
        <ListItem title="item" image="no.png" />
      </ListGroup>
    )

    instance = ReactTestUtils.renderIntoDocument tree
    items = ReactTestUtils.scryRenderedDOMComponentsWithTag instance, "img"
    expect(items.length).to.be(1)
