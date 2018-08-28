import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar';

import IndexPage from './pages/index';
import ShowPage from './pages/show';

class App extends Component {
  state = {
    notes: {
      1: {
        _id: 1,
        title: "Hello, world",
        body: "This is the body of my note.",
        updatedAt: new Date()
      },
      2: {
        _id: 2,
        title: "Hello, world again",
        body: "This is the body of my second note.",
        updatedAt: new Date()
      }
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="app-content">
          <Route exact path="/" component={(props) => <IndexPage {...props} notes={this.state.notes} /> } />
          <Route exact path="/notes/:id" component={(props) => <ShowPage {...props} note={this.state.notes[props.match.params.id]} />} />
          </div>
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
