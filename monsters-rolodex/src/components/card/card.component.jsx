import { Component } from 'react';

import './card.styles.css';

class Card extends Component {

  render() {

    const { id, name, email } = this.props.monster;

    return (
        <>
            <img
            alt={`monster ${name}`}
            src={`https://robohash.org/${id}?set=set${id}&size=180x180`}
            />
            <h2> {name} </h2>
            <p>{email}</p>
            <small>id: {id}</small>
        </>
    );
  }
}

export default Card;
