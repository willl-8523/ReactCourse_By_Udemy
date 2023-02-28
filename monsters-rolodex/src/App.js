import { useState, useEffect } from "react";
// import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
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
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       name: { firstName: 'Yves', lastName: 'TEST' },
//       company: 'Facebook',
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Hi {this.state.name.firstName} {this.state.name.lastName}, I work
//             at {this.state.company}
//           </p>
//           <button
//             onClick={() => {
//               this.setState({ name: {firstName: 'Guy', lastName: 'BI'} });
//               console.log(this.state);
//             }}
//           >
//             Change name
//           </button>
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

/* Debugger la valeur de l'objet state avec une fonction callback */
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       name: { firstName: 'Yves', lastName: 'TEST' },
//       company: 'Facebook',
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Hi {this.state.name.firstName} {this.state.name.lastName}, I work
//             at {this.state.company}
//           </p>
//           <button
//             onClick={() => {
//               this.setState(
//                 () => { 
//                   return {
//                     name: {firstName: 'Guy', lastName: 'BI'},
//                   };
                  
//                 },
//                 () => {
//                   // Affiche la nouvelle valeur de this.state
//                   console.log(this.state);
//                 },
//               );
//             }} 
//           >
//             Change name
//           </button>
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

/* Using map() and optimze her to display a list  */
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [
//         {
//           id: '12e125e',
//           name: 'Dragon',
//         },
//         {
//           id: '12e125e210a',
//           name: 'Hydre',
//         },
//         {
//           id: '12e12',
//           name: 'Licorne',
//         },
//         {
//           id: '12e125e3',
//           name: 'Drago',
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         {
//           this.state.monsters.map((monster) => {
//             return (
//               <div key={monster.id}>
//                 <h1>{monster.name}</h1>
//                 <small>id: {monster.id}</small>
//               </div>
//             );
//           })
//         }
//       </div>
//     );
//   }
// }

/* How to fetch API to display name and id in home page */
// class App extends Component {
//   constructor() {
//     super();

//     // Les utilsateurs seront sauvegargés ici
//     this.state = {
//       monsters: [],
//       inputLower: '',
//     };
//     // console.log('Constructor');
//   }

//   /* Comment avoir la liste des utilisateurs (méthode de cycle de vie) 
//     https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
//   */
//   componentDidMount() {
//     // console.log('componentDidMount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => {
//         // console.log(response);
//         return response.json();
//       })
//       .then((users) => {
//         this.setState(
//           () => {
//             // console.log(users);
//             return { monsters: users };
//           },
//           () => {
//             // console.log(this.state);
//           }
//         );
//       });
//   }

//   onSearchChange = (e) => {
//     const inputLower = e.target.value.toLowerCase();

//     this.setState(() => {
//       // return { inputLower };
//       return { inputLower: inputLower };
//     });
//   };

//   render() {
//     // console.log('render');
//     const { monsters, inputLower } = this.state;
//     const { onSearchChange } = this;

//     const filterMonsters = monsters.filter((monster) => {
//       const monsterLower = monster.name.toLowerCase();

//       return monsterLower.includes(inputLower);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>

//         <SearchBox
//           className={'monsters-search-box'}
//           placeholder={'Search monsters'}
//           onSearchChangeHandler={onSearchChange}
//         />

//         <CardList monsters={filterMonsters} />
//       </div>
//     );
//   }
// }

/* Composant fonctionnel */
const App = () => {

  /* 
    Pour debugger le composant sur lequel on agit:
      -> Dans la console cliquez sur le 3 points
      -> Cliquer sur Autres outils ensuite sur Affichage
      -> Une autre fenêtre s'ouvre, cochez Clignotement de la peinture
  */
  const [inputLower, setInputLower] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);

  // console.log('rendered');
  /*
     -> useEffect s'execute chaque fois que la valeur dans [] est modifiée 
     -> si [] est vide => useEffect ne s'execute que une fois
  */
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((users) => {
      setMonsters(users); // Comme users vient de l'exterieur (API) de notre navigateur, il va nous donner un tableau different en memoire
    }); 
  }, []);
  
  useEffect(() => {
    const newFilterMonsters = monsters.filter((monster) => {
      const monsterLower = monster.name.toLowerCase();

      return monsterLower.includes(inputLower);
    });

    setFilterMonsters(newFilterMonsters); 
  }, [monsters, inputLower]);
  
  const onSearchChange = (e) => {
    const inputLowerCase = e.target.value.toLowerCase();
    
    setInputLower(inputLowerCase);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rodolex</h1>

      <SearchBox
        className={'monsters-search-box'}
        placeholder={'Search monsters'}
        onSearchChangeHandler={onSearchChange}
      />

      <CardList monsters={filterMonsters} />
    </div>
  );
}

export default App;
