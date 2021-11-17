import "./App.css";
import { Component } from "react";
import Box from "./components/Box";

class App extends Component {
  constructor(props) {
    super(props);

    // set default state
    const boxes = [];
    const numBoxes = 24;
    for (let i = 0; i < numBoxes; i++) {
      boxes.push({
        id: i,
        color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
    });
    }

    // bind methods to this
    this.state = { boxes };
    this.handleBoxClick = this.handleBoxClick.bind(this);
  }
    handleBoxClick(e) {
      console.log(e.target.id);
      const newBoxes = this.state.boxes.map((box) => {
        // eslint-disable-next-line eqeqeq
        if (box.id == e.target.id) {
          box.color = `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
        }
      return box;
      });
      this.setState({boxes: newBoxes});
    }
    getRandomColor() {
      const rgb = Math.round(Math.random() * 255);
      return rgb;
    }

  render() {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        <div className="App">{ 
        
        this.state.boxes.map(box => {
          return <Box
          key={box.id}
          id={box.id}
          color={box.color}
          handleClick={this.handleBoxClick}
      /> 
        }) 
        }</div>
      </main>
    );
  }
}

export default App;
