expect = require "expect.js"
React = require "react"
Photon = require "../src/photon.coffee"

describe "photon", () ->

  it "should have components", () ->
    expect(Photon.Actionbar).to.be.ok()
    expect(Photon.Button).to.be.ok()
    expect(Photon.ButtonGroup).to.be.ok()
    expect(Photon.Content).to.be.ok()
    expect(Photon.CheckBox).to.be.ok()
    expect(Photon.Icon).to.be.ok()
    expect(Photon.Input).to.be.ok()
    expect(Photon.ListGroup).to.be.ok()
    expect(Photon.ListItem).to.be.ok()
    expect(Photon.NavGroup).to.be.ok()
    expect(Photon.NavGroupItem).to.be.ok()
    expect(Photon.NavTitle).to.be.ok()
    expect(Photon.Options).to.be.ok()
    expect(Photon.Pane).to.be.ok()
    expect(Photon.PaneGroup).to.be.ok()
    expect(Photon.Radio).to.be.ok()
    expect(Photon.RadioGroup).to.be.ok()
    expect(Photon.TabGroup).to.be.ok()
    expect(Photon.TabItem).to.be.ok()
    expect(Photon.Table).to.be.ok()
    expect(Photon.TextArea).to.be.ok()
    expect(Photon.Toolbar).to.be.ok()
    expect(Photon.Window).to.be.ok()
