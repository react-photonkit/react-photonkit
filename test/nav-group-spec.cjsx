expect = require "expect.js"
React = require "react"
ReactTestUtils = require "react/lib/ReactTestUtils"
ReactDOM = require "react-dom"
NavGroup = require "../src/nav-group.cjsx"
NavGroupItem = require "../src/nav-group-item.cjsx"

describe "navgroup", () ->

  it "Should create default element", () ->
    instance = ReactTestUtils.renderIntoDocument <NavGroup />
    node = ReactDOM.findDOMNode instance

    expect(node.nodeName).to.be("NAV")
    expect(node.className).to.be("nav-group")


  it "Should be active", () ->
    tree = (
      <NavGroup activeKey={1}>
        <NavGroupItem eventKey={1} glyph="home" text="home" />
        <NavGroupItem eventKey={2} glyph="cc" text="cc" />
      </NavGroup>
    )

    instance = ReactTestUtils.renderIntoDocument tree
    items = ReactTestUtils.scryRenderedComponentsWithType instance, NavGroupItem

    expect(items[0].props.active).to.ok()
    expect(items[1].props.active).to.not.ok()


  it "Should be active when clicked", (done) ->
    onSelect = (key) ->
      expect(2).to.be(key)
      done()

    tree = (
      <NavGroup activeKey={1} onSelect={onSelect}>
        <NavGroupItem eventKey={1} glyph="home" text="home" />
        <NavGroupItem eventKey={2} glyph="cc" text="cc" />
      </NavGroup>
    )

    instance = ReactTestUtils.renderIntoDocument tree
    items = ReactTestUtils.scryRenderedDOMComponentsWithTag instance, "a"
    ReactTestUtils.Simulate.click items[1]

  it "Draggable should be endabled", () ->
    tree = (
      <NavGroup activeKey={1} draggable>
        <NavGroupItem eventKey={1} glyph="home" text="home" />
        <NavGroupItem eventKey={2} glyph="cc" text="cc" />
      </NavGroup>
    )

    instance = ReactTestUtils.renderIntoDocument tree
    expect(instance.sortableOptions.disabled).to.be(false)
