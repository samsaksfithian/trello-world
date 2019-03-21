import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddBoardForm extends Component {
  static propTypes = {
    addBoard: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    // dispatch an addCard
    this.props.addBoard(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <form
        style={{ display: 'flex', width: '50%', margin: '0px 15px' }}
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          style={{
            flex: '1 0 auto',
            fontSize: '1rem',
            border: 0,
            padding: '0.4rem 0.65rem',
            borderRadius: '5px 0px 0px 5px',
          }}
          value={this.state.inputValue}
          placeholder="Add a board"
          onChange={e => this.setState({ inputValue: e.target.value })}
        />
        <button
          style={{
            background: 'rgb(30, 214, 124)',
            padding: '0 15px',
            border: 'none',
            borderRadius: '0px 5px 5px 0px',
            fontSize: '1rem',
          }}
          type="submit"
        >
          +
        </button>
      </form>
    );
  }
}
