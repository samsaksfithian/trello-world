import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Board from './Board';

// inline destructuring: ({ boards }) ==> boards = props.boards
const Main = ({ boards }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}
  >
    {boards.map((board, i) => (
      <Board key={i} index={i} name={board} />
    ))}
  </div>
);

Main.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.string),
};

// state is application state, not component state
const mapStateToProps = state => ({
  boards: state.boards,
});

// connect returns a function, then call that on the thing we want to be a connected component
const ConnectedMain = connect(mapStateToProps)(Main);

export default ConnectedMain;
