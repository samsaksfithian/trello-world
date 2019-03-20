/* eslint-disable no-case-declarations */
import short from 'shortid';
import { actionTypes } from './actions.js';

/**
 * Reducer function, part of Redux flow --
 * A PURE function that takes in the current state and the action, and returns updated state
 * @param {Object} [state] the current state
 * @param {Object} action the action to be performed
 */
function reducer(state = { boards: [], cards: [] }, action) {
  switch (action.type) {
    case actionTypes.ADD_CARD:
      return {
        boards: state.boards,
        cards: [
          ...state.cards,
          { id: short.generate(), text: action.text, board: action.boardIndex },
        ],
      };
    case actionTypes.REMOVE_CARD:
      return {
        boards: state.boards,
        cards: state.cards.filter(card => card.id !== action.cardId),
      };
    case actionTypes.TRANSFER_CARD:
      const index = state.cards.findIndex(card => card.id === action.cardId);
      const updatedCards = [...state.cards];
      updatedCards[index].board = action.destBoardIndex;
      return {
        boards: state.boards,
        cards: updatedCards,
        // cards: [
        //   ...state.cards.slice(0, index),
        //   { ...state.cards[index], board: action.destBoardIndex },
        //   ...state.cards.slice(index + 1),
        // ],
      };
    default:
      return state;
  }
}
