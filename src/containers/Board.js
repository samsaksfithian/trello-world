import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import Card from '../components/Card';
import AddCardForm from '../components/AddCardForm';

class Board extends React.Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
    addCard: PropTypes.func,
    removeCard: PropTypes.func,
    transferCard: PropTypes.func,
    removeBoard: PropTypes.func,
  };

  handleDrop = e => {
    e.preventDefault();
    this.props.transferCard(e.dataTransfer.getData('cardId'), this.props.index);
  };

  render() {
    const { index, name, cards, addCard, removeCard, removeBoard } = this.props;
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
        <button
          style={{
            float: 'right',
            top: '10px',
            right: '10px',
            border: '1px solid black',
            backgroundColor: '#f9f9f9',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
          onClick={() => removeBoard(index)}
        >
          &times;
        </button>
        <h2 style={{ margin: '0', marginBottom: '1rem' }}>{name}</h2>
        {cards.map((card, i) => (
          <Card key={i} card={card} removeCard={removeCard} />
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

// const mapDispatchToProps = dispatch => ({
//   addCard: (text, boardIndex) => dispatch(Actions.addCard(text, boardIndex)),
//   removeCard: id => dispatch(Actions.removeCard(id)),
// });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCard: Actions.addCard,
      removeCard: Actions.removeCard,
      transferCard: Actions.transferCard,
      removeBoard: Actions.removeBoard,
    },
    dispatch,
  );

// connect returns a function, then call that on the thing we want to be a connected component
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);
