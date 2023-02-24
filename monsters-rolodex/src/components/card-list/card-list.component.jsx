// import { Component } from 'react';
// import Card from '../card/card.component';

// import './card-list.styles.css';

// class CardList extends Component {

//     render() {
//       // console.log(this.props.monsters);
//       // console.log('render from cardList');
//       const { monsters } = this.props;

//       return (
//         <div className="card-list">
//           {monsters.map((monster, id) => (
            
//             <div key={id} className="card-container">
//               <Card monster={monster} />
//             </div>
            
//           ))}
//         </div>
//       );
//     }
// }

/* Convert to fonctionnal component */
import Card from '../card/card.component';

import './card-list.styles.css';

// const CardList = (props) => {

//   const { monsters } = props; OU
const CardList = ({ monsters }) => {

  return (
    <div className="card-list">
      {monsters.map((monster, id) => (

        <div key={id} className="card-container">
          <Card monster={monster} />
        </div>
        
      ))}
    </div>
  );
}

export default CardList;