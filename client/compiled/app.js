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
    value: function handleClick(xIndex) {
      console.log(xIndex);

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
        { 'class': 'column', onClick: function onClick() {
            _this5.props.handleClick(_this5.props.xIndex);
          } },
        this.props.column.map(function (pl) {
          return React.createElement(Place, { place: pl });
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
      return React.createElement(
        'div',
        { 'class': 'place' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImJvYXJkIiwidHVybiIsInBsYXllcnMiLCJyZXNldEJvYXJkIiwieEluZGV4IiwiY29uc29sZSIsImxvZyIsImNvbHVtbiIsImluc2VydFRvQ29sdW1uIiwic2V0U3RhdGUiLCJwaWVjZSIsImkiLCJsZW5ndGgiLCJoYW5kbGVDbGljayIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkJvYXJkIiwibWFwIiwiY29sIiwiaW5kZXgiLCJDb2x1bW4iLCJwbCIsInJldmVyc2UiLCJQbGFjZSIsInBsYWNlIiwid2luZG93IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUVKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhLEVBQUVDLE9BQU8sRUFBVCxFQUFhQyxNQUFNLENBQW5CLEVBQXNCQyxTQUFTLENBQUMsS0FBRCxFQUFRLE9BQVIsQ0FBL0IsRUFBYjtBQUNBLFVBQUtDLFVBQUw7QUFKaUI7QUFLbEI7Ozs7aUNBRWE7QUFDWixXQUFLSixLQUFMLENBQVdDLEtBQVgsR0FDQyxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBRCxFQUNDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FERCxFQUVDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FGRCxFQUdDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FIRCxFQUlDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENB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LGVBQUtBLEtBQUwsQ0FBVzJCO0FBQWY7QUFBbkIsT0FERjtBQUdEOzs7O0VBVmlCVixNQUFNQyxTOztBQWExQlUsT0FBT0MsR0FBUCxHQUFhLG9CQUFDLEdBQUQsT0FBYiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHsgYm9hcmQ6IFtdLCB0dXJuOiAwLCBwbGF5ZXJzOiBbJ3JlZCcsICdibGFjayddfTtcbiAgICB0aGlzLnJlc2V0Qm9hcmQoKTtcbiAgfVxuXG4gIHJlc2V0Qm9hcmQgKCkge1xuICAgIHRoaXMuc3RhdGUuYm9hcmQgPVxuICAgICBbWzAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDBdXTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrICh4SW5kZXgpIHtcbiAgICBjb25zb2xlLmxvZyh4SW5kZXgpO1xuXG4gICAgbGV0IGJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZDtcbiAgICBsZXQgY29sdW1uID0gYm9hcmRbeEluZGV4XTtcblxuICAgIGNvbHVtbiA9IHRoaXMuaW5zZXJ0VG9Db2x1bW4oY29sdW1uLCAodGhpcy5zdGF0ZS50dXJuICUgMikgKyAxKSB8fCBjb2x1bW47XG4gICAgYm9hcmRbeEluZGV4XSA9IGNvbHVtbjtcbiAgICB0aGlzLnNldFN0YXRlKHsgYm9hcmQ6IGJvYXJkLCB0dXJuOiB0aGlzLnN0YXRlLnR1cm4gKyAxIH0pO1xuICB9XG5cbiAgaW5zZXJ0VG9Db2x1bW4gKGNvbHVtbiwgcGllY2UpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29sdW1uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihjb2x1bW5baV0gPT09IDApIHtcbiAgICAgICAgY29sdW1uW2ldID0gcGllY2U7XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPiBDT05ORUNUIEZPVVJSUiA8L2gxPlxuICAgICAgICA8Qm9hcmQgYm9hcmQ9e3RoaXMuc3RhdGUuYm9hcmR9IGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gXG59XG5cbmNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJib2FyZFwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmJvYXJkLm1hcCgoY29sLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPENvbHVtbiBjb2x1bW49e2NvbH0geEluZGV4PXtpbmRleH0gaGFuZGxlQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2xpY2t9Lz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgXG59XG5cbmNsYXNzIENvbHVtbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5wcm9wcy5oYW5kbGVDbGljayh0aGlzLnByb3BzLnhJbmRleCl9fT5cbiAgICAgICAgeyAodGhpcy5wcm9wcy5jb2x1bW4ubWFwKHBsID0+IChcbiAgICAgICAgICA8UGxhY2UgcGxhY2UgPSB7cGx9Lz5cbiAgICAgICAgKSkucmV2ZXJzZSgpKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgUGxhY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cInBsYWNlXCI+PHA+e3RoaXMucHJvcHMucGxhY2V9PC9wPjwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxud2luZG93LmFwcCA9IDxBcHAgLz47Il19