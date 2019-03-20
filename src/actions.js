/**
 * Constant object keeping track of strings for all action types
 */
export const actionTypes = {
  ADD_CARD: 'ADD_CARD',
  REMOVE_CARD: 'REMOVE_CARD',
  TRANSFER_CARD: 'TRANSFER_CARD',
};

/**
 * add a card (action creator)
 * Arrow function with implicit return that returns an action object
 * @param {String} text the text of the card to be added
 * @param {number} boardIndex the number index/id of the board the card should be added to
 */
export const addCard = (text, boardIndex) => ({
  type: actionTypes.ADD_CARD,
  text,
  boardIndex,
});

/**
 * remove a card (action creator)
 * Arrow function with implicit return that returns an action object
 * @param {number} cardId the number index/id of the card to be removed
 */
export const removeCard = cardId => ({
  type: actionTypes.REMOVE_CARD,
  cardId,
});

// move/transfer a card
/**
 * move/transfer a card (action creator)
 * Arrow function with implicit return that returns an action object
 * @param {number} cardId the number index/id of the card to be removed
 * @param {number} destBoardIndex the number index/id of the board the card should be moved to
 */
export const transferCard = (cardId, destBoardIndex) => ({
  type: actionTypes.TRANSFER_CARD,
  cardId,
  destBoardIndex,
});

// add a board
// remove a board
// change position of card?
// update a card?
