import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import Card from '../components/Card';
import AddCardForm from '../components/AddCardForm';

class Board extends React.Component {
  static propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
    addCard: PropTypes.func,
  };

  handleDrop = e => {
    e.preventDefault();
    console.log('dropping...');
  };

  render() {
    const { index, name, cards, addCard } = this.props;
    return (
      <div
        className="board"
        style={{
          flex: '0 0 300px',
          margin: '15px',
          padding: '15px',
          borderRadius: '5px',
          backgroundColor: '#E3E4E6',
          boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.1)',
        }}
        onDragOver={e => e.preventDefault()}
        onDrop={this.handleDrop}
      >
        <h2 style={{ margin: '0', marginBottom: '1rem' }}>{name}</h2>
        {cards.map((card, i) => (
          <Card key={i} card={card} />
        ))}
        <AddCardForm boardIndex={index} addCard={addCard} />
      </div>
    );
  }
}

// state is application state, not component state
// ownProps are the props passed into the compenent used to make the higher order component
const mapStateToProps = (state, ownProps) => ({
  cards: state.cards.filter(card => card.board === ownProps.index),
});

const mapDispatchToProps = dispatch => ({
  addCard: (text, boardIndex) => dispatch(addCard(text, boardIndex)),
});

// connect returns a function, then call that on the thing we want to be a connected component
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);
