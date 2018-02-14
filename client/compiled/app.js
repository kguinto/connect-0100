"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { board: [] };
    _this.resetBoard();
    return _this;
  }

  _createClass(App, [{
    key: "resetBoard",
    value: function resetBoard() {
      this.state.board = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          " CONNECT FOURRR "
        ),
        React.createElement(Board, { board: this.state.board })
      );
    }
  }]);

  return App;
}(React.Component);

var Board = function (_React$Component2) {
  _inherits(Board, _React$Component2);

  function Board(props) {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));
  }

  _createClass(Board, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "board" },
        this.props.board.map(function (col, index) {
          return React.createElement(Column, { column: col, xIndex: index });
        })
      );
    }
  }]);

  return Board;
}(React.Component);

var Column = function (_React$Component3) {
  _inherits(Column, _React$Component3);

  function Column(props) {
    _classCallCheck(this, Column);

    var _this3 = _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).call(this, props));

    _this3.state = { column: _this3.props.column };
    return _this3;
  }

  _createClass(Column, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "column" },
        this.state.column.reverse().map(function (pl) {
          return React.createElement(Place, { place: pl });
        })
      );
    }
  }]);

  return Column;
}(React.Component);

var Place = function (_React$Component4) {
  _inherits(Place, _React$Component4);

  function Place(props) {
    _classCallCheck(this, Place);

    return _possibleConstructorReturn(this, (Place.__proto__ || Object.getPrototypeOf(Place)).call(this, props));
  }

  _createClass(Place, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "place" },
        React.createElement(
          "p",
          null,
          this.props.place
        )
      );
    }
  }]);

  return Place;
}(React.Component);

window.app = React.createElement(App, null);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImJvYXJkIiwicmVzZXRCb2FyZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQm9hcmQiLCJtYXAiLCJjb2wiLCJpbmRleCIsIkNvbHVtbiIsImNvbHVtbiIsInJldmVyc2UiLCJwbCIsIlBsYWNlIiwicGxhY2UiLCJ3aW5kb3ciLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBRUosZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWEsRUFBRUMsT0FBTyxFQUFULEVBQWI7QUFDQSxVQUFLQyxVQUFMO0FBSmlCO0FBS2xCOzs7O2lDQUVhO0FBQ1osV0FBS0YsS0FBTCxDQUFXQyxLQUFYLEdBQ0MsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBQUQsRUFDQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBREQsRUFFQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBRkQsRUFHQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBSEQsRUFJQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBSkQsRUFLQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBTEQsRUFNQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBTkQsRUFPQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBUEQsQ0FERDtBQVNEOzs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFLDRCQUFDLEtBQUQsSUFBTyxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FBekI7QUFGRixPQURGO0FBTUQ7Ozs7RUE1QmVFLE1BQU1DLFM7O0lBK0JsQkMsSzs7O0FBRUosaUJBQVlOLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5R0FDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssU0FBTSxPQUFYO0FBQ0ssYUFBS0EsS0FBTCxDQUFXRSxLQUFYLENBQWlCSyxHQUFqQixDQUFxQixVQUFDQyxHQUFELEVBQU1DLEtBQU47QUFBQSxpQkFDcEIsb0JBQUMsTUFBRCxJQUFRLFFBQVFELEdBQWhCLEVBQXFCLFFBQVFDLEtBQTdCLEdBRG9CO0FBQUEsU0FBckI7QUFETCxPQURGO0FBT0Q7Ozs7RUFkaUJMLE1BQU1DLFM7O0lBa0JwQkssTTs7O0FBRUosa0JBQVlWLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpSEFDWEEsS0FEVzs7QUFHakIsV0FBS0MsS0FBTCxHQUFhLEVBQUNVLFFBQVEsT0FBS1gsS0FBTCxDQUFXVyxNQUFwQixFQUFiO0FBSGlCO0FBSWxCOzs7OzZCQUNTO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxTQUFNLFFBQVg7QUFDRyxhQUFLVixLQUFMLENBQVdVLE1BQVgsQ0FBa0JDLE9BQWxCLEdBQTRCTCxHQUE1QixDQUFnQztBQUFBLGlCQUMvQixvQkFBQyxLQUFELElBQU8sT0FBU00sRUFBaEIsR0FEK0I7QUFBQSxTQUFoQztBQURILE9BREY7QUFPRDs7OztFQWZrQlQsTUFBTUMsUzs7SUFrQnJCUyxLOzs7QUFFSixpQkFBWWQsS0FBWixFQUFtQjtBQUFBOztBQUFBLHlHQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxTQUFNLE9BQVg7QUFBbUI7QUFBQTtBQUFBO0FBQUksZUFBS0EsS0FBTCxDQUFXZTtBQUFmO0FBQW5CLE9BREY7QUFHRDs7OztFQVZpQlgsTUFBTUMsUzs7QUFhMUJXLE9BQU9DLEdBQVAsR0FBYSxvQkFBQyxHQUFELE9BQWIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7IGJvYXJkOiBbXX07XG4gICAgdGhpcy5yZXNldEJvYXJkKCk7XG4gIH1cblxuICByZXNldEJvYXJkICgpIHtcbiAgICB0aGlzLnN0YXRlLmJvYXJkID1cbiAgICAgW1swLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXV07XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+IENPTk5FQ1QgRk9VUlJSIDwvaDE+XG4gICAgICAgIDxCb2FyZCBib2FyZD17dGhpcy5zdGF0ZS5ib2FyZH0vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBcbn1cblxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cImJvYXJkXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuYm9hcmQubWFwKChjb2wsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Q29sdW1uIGNvbHVtbj17Y29sfSB4SW5kZXg9e2luZGV4fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBcbn1cblxuY2xhc3MgQ29sdW1uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtjb2x1bW46IHRoaXMucHJvcHMuY29sdW1ufTtcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgIHt0aGlzLnN0YXRlLmNvbHVtbi5yZXZlcnNlKCkubWFwKHBsID0+IChcbiAgICAgICAgICA8UGxhY2UgcGxhY2UgPSB7cGx9Lz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIFBsYWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJwbGFjZVwiPjxwPnt0aGlzLnByb3BzLnBsYWNlfTwvcD48L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbndpbmRvdy5hcHAgPSA8QXBwIC8+OyJdfQ==