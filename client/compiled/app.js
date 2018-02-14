'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { board: [], turn: 0, players: ['red', 'black'] };
    _this.resetBoard();
    return _this;
  }

  _createClass(App, [{
    key: 'resetBoard',
    value: function resetBoard() {
      this.state.board = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
    }
  }, {
    key: 'handleClick',
    value: function handleClick(xIndex, yIndex) {
      console.log(xIndex + ', ' + yIndex);

      var board = this.state.board;
      var column = board[xIndex];

      column = this.insertToColumn(column, this.state.turn % 2 + 1) || column;
      board[xIndex] = column;
      this.setState({ board: board, turn: this.state.turn + 1 });
    }
  }, {
    key: 'insertToColumn',
    value: function insertToColumn(column, piece) {
      for (var i = 0; i < column.length; i++) {
        if (column[i] === 0) {
          column[i] = piece;
          return column;
        }
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          ' CONNECT FOURRR '
        ),
        React.createElement(Board, { board: this.state.board, handleClick: this.handleClick.bind(this) })
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
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        { 'class': 'board' },
        this.props.board.map(function (col, index) {
          return React.createElement(Column, { column: col, xIndex: index, handleClick: _this3.props.handleClick });
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

    return _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).call(this, props));
  }

  _createClass(Column, [{
    key: 'render',
    value: function render() {
      var _this5 = this;

      return React.createElement(
        'div',
        { 'class': 'column' },
        this.props.column.map(function (pl, index) {
          return React.createElement(Place, { place: pl, handleClick: _this5.props.handleClick, xIndex: _this5.props.xIndex, yIndex: index });
        }).reverse()
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
    key: 'render',
    value: function render() {
      var _this7 = this;

      return React.createElement(
        'div',
        { 'class': 'place', onClick: function onClick() {
            _this7.props.handleClick(_this7.props.xIndex, _this7.props.yIndex);
          } },
        React.createElement(
          'p',
          null,
          this.props.place
        )
      );
    }
  }]);

  return Place;
}(React.Component);

window.app = React.createElement(App, null);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImJvYXJkIiwidHVybiIsInBsYXllcnMiLCJyZXNldEJvYXJkIiwieEluZGV4IiwieUluZGV4IiwiY29uc29sZSIsImxvZyIsImNvbHVtbiIsImluc2VydFRvQ29sdW1uIiwic2V0U3RhdGUiLCJwaWVjZSIsImkiLCJsZW5ndGgiLCJoYW5kbGVDbGljayIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkJvYXJkIiwibWFwIiwiY29sIiwiaW5kZXgiLCJDb2x1bW4iLCJwbCIsInJldmVyc2UiLCJQbGFjZSIsInBsYWNlIiwid2luZG93IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUVKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhLEVBQUVDLE9BQU8sRUFBVCxFQUFhQyxNQUFNLENBQW5CLEVBQXNCQyxTQUFTLENBQUMsS0FBRCxFQUFRLE9BQVIsQ0FBL0IsRUFBYjtBQUNBLFVBQUtDLFVBQUw7QUFKaUI7QUFLbEI7Ozs7aUNBRWE7QUFDWixXQUFLSixLQUFMLENBQVdDLEtBQVgsR0FDQyxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBRCxFQUNDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FERCxFQUVDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FGRCxFQUdDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FIRCxFQUlDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FB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NkJBRVM7QUFBQTs7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLFNBQU0sT0FBWCxFQUFtQixTQUFTLG1CQUFNO0FBQUMsbUJBQUtBLEtBQUwsQ0FBV2dCLFdBQVgsQ0FBdUIsT0FBS2hCLEtBQUwsQ0FBV00sTUFBbEMsRUFBMEMsT0FBS04sS0FBTCxDQUFXTyxNQUFyRDtBQUE2RCxXQUFoRztBQUFrRztBQUFBO0FBQUE7QUFBSSxlQUFLUCxLQUFMLENBQVc0QjtBQUFmO0FBQWxHLE9BREY7QUFHRDs7OztFQVZpQlYsTUFBTUMsUzs7QUFhMUJVLE9BQU9DLEdBQVAsR0FBYSxvQkFBQyxHQUFELE9BQWIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7IGJvYXJkOiBbXSwgdHVybjogMCwgcGxheWVyczogWydyZWQnLCAnYmxhY2snXX07XG4gICAgdGhpcy5yZXNldEJvYXJkKCk7XG4gIH1cblxuICByZXNldEJvYXJkICgpIHtcbiAgICB0aGlzLnN0YXRlLmJvYXJkID1cbiAgICAgW1swLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXV07XG4gIH1cblxuICBoYW5kbGVDbGljayAoeEluZGV4LCB5SW5kZXgpIHtcbiAgICBjb25zb2xlLmxvZyh4SW5kZXggKyAgJywgJyArIHlJbmRleCk7XG5cbiAgICBsZXQgYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkO1xuICAgIGxldCBjb2x1bW4gPSBib2FyZFt4SW5kZXhdO1xuXG4gICAgY29sdW1uID0gdGhpcy5pbnNlcnRUb0NvbHVtbihjb2x1bW4sICh0aGlzLnN0YXRlLnR1cm4gJSAyKSArIDEpIHx8IGNvbHVtbjtcbiAgICBib2FyZFt4SW5kZXhdID0gY29sdW1uO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBib2FyZDogYm9hcmQsIHR1cm46IHRoaXMuc3RhdGUudHVybiArIDEgfSk7XG4gIH1cblxuICBpbnNlcnRUb0NvbHVtbiAoY29sdW1uLCBwaWVjZSkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb2x1bW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKGNvbHVtbltpXSA9PT0gMCkge1xuICAgICAgICBjb2x1bW5baV0gPSBwaWVjZTtcbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+IENPTk5FQ1QgRk9VUlJSIDwvaDE+XG4gICAgICAgIDxCb2FyZCBib2FyZD17dGhpcy5zdGF0ZS5ib2FyZH0gaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBcbn1cblxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cImJvYXJkXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuYm9hcmQubWFwKChjb2wsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Q29sdW1uIGNvbHVtbj17Y29sfSB4SW5kZXg9e2luZGV4fSBoYW5kbGVDbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDbGlja30vPlxuICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBcbn1cblxuY2xhc3MgQ29sdW1uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiID5cbiAgICAgICAgeyAodGhpcy5wcm9wcy5jb2x1bW4ubWFwKChwbCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8UGxhY2UgcGxhY2U9IHtwbH0gaGFuZGxlQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2xpY2t9IHhJbmRleD17dGhpcy5wcm9wcy54SW5kZXh9IHlJbmRleD17aW5kZXh9Lz5cbiAgICAgICAgKSkucmV2ZXJzZSgpKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgUGxhY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cInBsYWNlXCIgb25DbGljaz17KCkgPT4ge3RoaXMucHJvcHMuaGFuZGxlQ2xpY2sodGhpcy5wcm9wcy54SW5kZXgsIHRoaXMucHJvcHMueUluZGV4KX19PjxwPnt0aGlzLnByb3BzLnBsYWNlfTwvcD48L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbndpbmRvdy5hcHAgPSA8QXBwIC8+OyJdfQ==