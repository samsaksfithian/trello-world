/* eslint-disable no-case-declarations */
import short from 'shortid';
import { combineReducers } from 'redux';
import { actionTypes } from './actions.js';

/**
 * Broken down reducer function, deals with only card state changes
 * @param {Array<Object>} [state] the piece of current state relevant to this reducer, i.e. store.cards
 * @param {Object} action the action to be performed
 * @returns {Array<Object>} the updated state
 */
function cards(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_CARD:
      return [
        ...state,
        { id: short.generate(), text: action.text, board: action.boardIndex },
      ];
    case actionTypes.REMOVE_CARD:
      return state.filter(card => card.id !== action.cardId);
    case actionTypes.TRANSFER_CARD:
      const index = state.findIndex(card => card.id === action.cardId);
      return [
        ...state.slice(0, index),
        { ...state[index], board: action.destBoardIndex },
        ...state.slice(index + 1),
      ];
    case actionTypes.REMOVE_BOARD:
      // if a board is removed, remove all cards that were on that board
      return state.filter(card => card.board !== action.boardIndex);
    default:
      return state;
  }
}

/**
 * Broken down reducer function, deals with only board state changes
 * @param {Array<string>} [state] the piece of current state relevant to this reducer, i.e. store.boards
 * @param {Object} action the action to be performed
 * @returns {Array<string>} the updated state
 */
function boards(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_BOARD:
      return [...state, action.name];
    case actionTypes.REMOVE_BOARD:
      return [
        ...state.slice(0, action.boardIndex),
        ...state.slice(action.boardIndex + 1),
      ];
    default:
      return state;
  }
}

/**
 * Root reducer function, composite of broken down reducer functions --
 * A PURE function that takes in the current state and the action, and returns updated state
 * @param {Object} [state] the current state
 * @param {Object} action the action to be performed
 * @returns {Array<Object>} the updated state
 */
const rootReducer = combineReducers({ cards, boards });

export default rootReducer;
