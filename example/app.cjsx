ReactDom = require 'react-dom'
{
  Title
  Window, Content
  Toolbar, Actionbar
  Icon, Button, ButtonInfo, ButtonGroup
  Pane, PaneGroup
  NavGroup, NavTitle, NavGroupItem
} = require '../src/photon.coffee'

Header = require './header.cjsx'
Footer = require './footer.cjsx'
Sidebar = require './sidebar.cjsx'
ExamPane = require './examPane.cjsx'

window.ReactDom = ReactDom

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
  , document.querySelector '#main')
