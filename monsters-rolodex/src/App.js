import { Component } from "react";

import logo from './logo.svg';
import './App.css';

/* Transformer un composant fonctionnel en composant de classe */
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

/* Utiliser les variables, les états et la fusion superficielle */
class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'Yves', lastName: 'TEST' },
      company: 'Facebook',
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work
            at {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState({ name: {firstName: 'Guy', lastName: 'BI'} });
              console.log(this.state);
            }}
          >
            Change name
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
