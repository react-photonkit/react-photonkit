React = require "react"
{ Button } = require "../src/photon.coffee"

module.exports = React.createClass
  iconNames: ["address", "adjust", "air", "alert", "archive",
    "arrow-combo", "arrows-ccw", "attach", "attention", "back",
    "back-in-time", "bag", "basket", "battery", "behance",
    "bell", "block", "book", "book-open", "bookmark",
    "bookmarks", "box", "briefcase", "brush", "bucket",
    "calendar", "camera", "cancel", "cancel-circled", "cancel-squared",
    "cc", "cc-by", "cc-nc", "cc-nc-eu", "cc-nc-jp",
    "cc-nd", "cc-pd", "cc-remix", "cc-sa", "cc-share",
    "cc-zero", "ccw", "cd", "chart-area", "chart-bar",
    "chart-line", "chart-pie", "chat", "check", "clipboard",
    "clock", "cloud", "cloud-thunder", "code", "cog",
    "comment", "compass", "credit-card", "cup", "cw",
    "database", "db-shape", "direction", "doc", "doc-landscape",
    "doc-text", "doc-text-inv", "docs", "dot", "dot-2",
    "dot-3", "down", "down-bold", "down-circled", "down-dir",
    "down-open", "down-open-big", "down-open-mini", "down-thin", "download",
    "dribbble", "dribbble-circled", "drive", "dropbox", "droplet",
    "erase", "evernote", "export", "eye", "facebook",
    "facebook-circled", "facebook-squared", "fast-backward", "fast-forward", "feather",
    "flag", "flash", "flashlight", "flattr", "flickr",
    "flickr-circled", "flight", "floppy", "flow-branch", "flow-cascade",
    "flow-line", "flow-parallel", "flow-tree", "folder", "forward",
    "gauge", "github", "github-circled", "globe", "google-circles",
    "gplus", "gplus-circled", "graduation-cap", "heart", "heart-empty",
    "help", "help-circled", "home", "hourglass", "inbox",
    "infinity", "info", "info-circled", "instagram", "install",
    "key", "keyboard", "lamp", "language", "lastfm",
    "lastfm-circled", "layout", "leaf", "left", "left-bold",
    "left-circled", "left-dir", "left-open", "left-open-big", "left-open-mini",
    "left-thin", "level-down", "level-up", "lifebuoy", "light-down",
    "light-up", "link", "linkedin", "linkedin-circled", "list",
    "list-add", "location", "lock", "lock-open", "login",
    "logo-db", "logout", "loop", "magnet", "mail",
    "map", "megaphone", "menu", "mic", "minus",
    "minus-circled", "minus-squared", "mixi", "mobile", "monitor",
    "moon", "mouse", "music", "mute", "network",
    "newspaper", "note", "note-beamed", "palette", "paper-plane",
    "pause", "paypal", "pencil", "phone", "picasa",
    "picture", "pinterest", "pinterest-circled", "play", "plus",
    "plus-circled", "plus-squared", "popup", "print", "progress-0",
    "progress-1", "progress-2", "progress-3", "publish", "qq",
    "quote", "rdio", "rdio-circled", "record", "renren",
    "reply", "reply-all", "resize-full", "resize-small", "retweet",
    "right", "right-bold", "right-circled", "right-dir", "right-open",
    "right-open-big", "right-open-mini", "right-thin", "rocket", "rss",
    "search", "share", "shareable", "shuffle", "signal",
    "sina-weibo", "skype", "skype-circled", "smashing", "sound",
    "soundcloud", "spotify", "spotify-circled", "star", "star-empty",
    "stop", "stumbleupon", "stumbleupon-circled", "suitcase", "sweden",
    "switch", "tag", "tape", "target", "thermometer",
    "thumbs-down", "thumbs-up", "ticket", "to-end", "to-start",
    "tools", "traffic-cone", "trash", "trophy", "tumblr",
    "tumblr-circled", "twitter", "twitter-circled", "up", "up-bold",
    "up-circled", "up-dir", "up-open", "up-open-big", "up-open-mini",
    "up-thin", "upload", "upload-cloud", "user", "user-add",
    "users", "vcard", "video", "vimeo", "vimeo-circled",
    "vkontakte", "volume", "water", "window"]

  render: ->
    icons = @iconNames.map (name, index) ->
      <div key="#{name}-#{index}">
        <Button glyph={name} title={name} text={name} />
      </div>

    <div className="padded-more">
      {icons}
    </div>
