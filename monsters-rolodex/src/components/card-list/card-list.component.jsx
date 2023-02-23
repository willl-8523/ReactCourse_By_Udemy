import { Component } from 'react';

class CardList extends Component {

    render() {
      // console.log(this.props.monsters);
      // console.log('render from cardList');
      const { monsters } = this.props;
      return (
        <div>
          {monsters.map((monster) => (
            <div key={monster.id}>
              <h1> {monster.name} </h1>
              <small>id: {monster.id}</small>
            </div>
          ))}
        </div>
      );
    }
}

export default CardList;