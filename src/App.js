import React from 'react';
import './App.css';
import Header from './Header';
import Clicker from './Clicker';
import './style.css';
class App extends React.Component {
 constructor(props) {
        super(props);

        this.state = {
            title: 'React Clicker'
        }
    }
    render(){

  return (
    <div>
    <Header title={this.state.title} />
      <div>
      <Clicker />
      </div>
    </div>
    );
  }
}

export default App;
