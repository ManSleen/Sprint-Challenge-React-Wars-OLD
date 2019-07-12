import React, { Component } from "react";
import CharacterList from "./components/CharacterList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      active: true
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  showInfo = () => {
    console.log("Clicked showInfo");
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">REACT WARS</h1>
        <CharacterList
          showInfo={this.showInfo}
          active={this.state.active}
          chars={this.state.starwarsChars}
        />
      </div>
    );
  }
}

export default App;
