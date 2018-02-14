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

  handleClick (xIndex, yIndex) {
    console.log(xIndex +  ', ' + yIndex);

    let board = this.state.board;
    let column = board[xIndex];
    let piece = (this.state.turn % 2) + 1;

    let yInsertedAt = this.insertToColumn(column, piece);
    board[xIndex] = column;

    if(yInsertedAt >= 0) {
      console.log('fourAt row', this.fourAtRow(yInsertedAt, piece));
    }

    this.setState({ board: board, turn: this.state.turn + 1 });
  }

  fourAtRow (y, piece) {
      let streak = 0;
      let board = this.state.board;

      for(let i = 0; i < board.length; i++) {
        streak = (board[i][y] === piece) ? streak + 1 : 0;

        if(streak === 4) {
          return true;
        }
      }
      return false;
  }

  insertToColumn (column, piece) {
    for(let i = 0; i < column.length; i++) {
      if(column[i] === 0) {
        column[i] = piece;
        return i;
      }
    }
    return -1;
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
      <div class="column" >
        { (this.props.column.map((pl, index) => (
          <Place place= {pl} handleClick={this.props.handleClick} xIndex={this.props.xIndex} yIndex={index}/>
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
      <div class="place" onClick={() => {this.props.handleClick(this.props.xIndex, this.props.yIndex)}}><p>{this.props.place}</p></div>
    );
  }
}

window.app = <App />;