import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addBoard } from '../actions';
import Board from './Board';
import AddBoardForm from '../components/AddBoardForm';

// inline destructuring: ({ boards }) ==> boards = props.boards
const Main = ({ boards, addBoard: addBoardFunc }) => (
  <div>
    <AddBoardForm addBoard={addBoardFunc} />
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
  </div>
);

Main.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.string),
  addBoard: PropTypes.func,
};

// state is application state, not component state
const mapStateToProps = state => ({
  boards: state.boards,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addBoard }, dispatch);

// connect returns a function, then call that on the thing we want to be a connected component
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
