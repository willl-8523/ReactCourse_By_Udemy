import { Component } from 'react';

class CardList extends Component {

    render() {
        console.log(this.props);
        const { monsters } = this.props;
        return (
          <div>
              { monsters.map((monster) => (
                    <h1 key={monster.id}> {monster.name} </h1>
                    // <small>id: {monster.id}</small>
                ))} 
          </div>
        );
    }
}

export default CardList;