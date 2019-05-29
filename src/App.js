import React from 'react';
import Houses from './components/Houses'



class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return(
      <div className = 'container'>
        <Houses />
      </div>
    )
  }
}

export default App;
