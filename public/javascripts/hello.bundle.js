webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(2);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar SayHello = (function (_React$Component) {\n  _inherits(SayHello, _React$Component);\n\n  function SayHello(props) {\n    var _this = this;\n\n    _classCallCheck(this, SayHello);\n\n    _get(Object.getPrototypeOf(SayHello.prototype), 'constructor', this).call(this, props);\n\n    this.handleChange = function (e) {\n      _this.setState({ who: \"who is \" + e.target.value.trim() });\n    };\n\n    this.state = { who: '' };\n  }\n\n  _createClass(SayHello, [{\n    key: 'render',\n    value: function render() {\n      return _react2['default'].createElement(\n        'div',\n        null,\n        _react2['default'].createElement('input', { type: 'text', ref: 'who', onChange: this.handleChange }),\n        _react2['default'].createElement(\n          'p',\n          null,\n          'Hello ',\n          this.props.who,\n          ' 2342'\n        ),\n        _react2['default'].createElement(\n          'p',\n          null,\n          this.state.who\n        )\n      );\n    }\n  }]);\n\n  return SayHello;\n})(_react2['default'].Component);\n\n_reactDom2['default'].render(_react2['default'].createElement(SayHello, { who: 'World! !!!' }), document.getElementById('hello'));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qYXZhc2NyaXB0cy9zYXkuanN4P2FhZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5jbGFzcyBTYXlIZWxsbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHdobzogJycgfTtcbiAgfVxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB3aG86IFwid2hvIGlzIFwiICsgZS50YXJnZXQudmFsdWUudHJpbSgpIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwid2hvXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8cD5IZWxsbyB7dGhpcy5wcm9wcy53aG99IDIzNDI8L3A+XG4gICAgICAgIDxwPnt0aGlzLnN0YXRlLndob308L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8U2F5SGVsbG8gd2hvPSdXb3JsZCEgISEhJyAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlbGxvJykpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hc3NldHMvamF2YXNjcmlwdHMvc2F5LmpzeFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBQ0E7QUFMQTs7QUFRQTtBQUNBOzs7QUFFQTtBQUNBOzs7O0FBQUE7O0FBQUE7QUFDQTs7O0FBQUE7QUFBQTtBQUNBO0FBRUE7OztBQWhCQTtBQUFBO0FBQ0E7QUFrQkEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

});