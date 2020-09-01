import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import store from './store'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      notes: store.notes,
      folders: store.folders
     }
  }
  render() { 
    return ( 
      <Main {...store}/>
     );
  }
}
export default App;