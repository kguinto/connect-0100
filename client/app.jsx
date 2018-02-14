class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { board: [], turn: 0, players: ['red', 'black']};
    this.resetBoard();
  }

  resetBoard () {
    this.state.board =
     [[0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]];
  }

  handleClick (xIndex) {
    console.log(xIndex);

    let board = this.state.board;
    let column = board[xIndex];

    column = this.insertToColumn(column, (this.state.turn % 2) + 1) || column;
    board[xIndex] = column;
    this.setState({ board: board, turn: this.state.turn + 1 });
  }

  insertToColumn (column, piece) {
    for(let i = 0; i < column.length; i++) {
      if(column[i] === 0) {
        column[i] = piece;
        return column;
      }
    }
    return null;
  }

  render () {
    return (
      <div>
        <h1> CONNECT FOURRR </h1>
        <Board board={this.state.board} handleClick={this.handleClick.bind(this)}/>
      </div>
    );
  } 
}

class Board extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div class="board">
          {this.props.board.map((col, index) => (
            <Column column={col} xIndex={index} handleClick={this.props.handleClick}/>
          ))}
      </div>
    );
  }
  
}

class Column extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div class="column" onClick={() => {this.props.handleClick(this.props.xIndex)}}>
        { (this.props.column.map(pl => (
          <Place place = {pl}/>
        )).reverse())}
      </div>
    );
  }
}

class Place extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div class="place"><p>{this.props.place}</p></div>
    );
  }
}

window.app = <App />;