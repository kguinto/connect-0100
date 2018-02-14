class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { board: []};
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

  render () {
    return (
      <div>
        <h1> CONNECT FOURRR </h1>
        <Board board={this.state.board}/>
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
            <Column column={col} xIndex={index} />
          ))}
      </div>
    );
  }
  
}

class Column extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {column: this.props.column};
  }
  render () {
    return (
      <div class="column">
        {this.state.column.reverse().map(pl => (
          <Place place = {pl}/>
        ))}
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