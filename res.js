"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = void 0;

var _index = _interopRequireDefault(require("../../client/src/Routes/index.jsx"));

var _server = require("react-dom/server");

var _reactRouterDom = require("react-router-dom");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var render = function render(req) {
  //鏋勫缓鏈嶅姟绔殑璺敱
  var content = (0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_reactRouterDom.StaticRouter, {
    location: req.path
  }, _index["default"]));
  return "\n    <html>\n      <head>\n        <title>ssr</title>\n      </head>\n      <body>\n        <div id=\"root\">".concat(content, "</div>\n        <script src=\"http://localhost:3000/index.js\"></script>\n      </body>\n    </html>\n  ");
};

exports.render = render;

