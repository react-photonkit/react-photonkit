React = require "react"
ReactDom = require "react-dom"
{ Window, Content, PaneGroup } = require "../src/photon.coffee"

Header = require "./header.cjsx"
Footer = require "./footer.cjsx"
Sidebar = require "./sidebar.cjsx"
ExamPane = require "./exam-pane.cjsx"

ReactDom.render(
  <Window>
    <Header />
    <Content>
      <PaneGroup>
        <Sidebar />
        <ExamPane />
      </PaneGroup>
    </Content>
    <Footer />
  </Window>
  , document.querySelector "#main")
