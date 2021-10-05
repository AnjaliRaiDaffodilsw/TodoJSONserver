import React, { Component } from 'react'
import { connect } from 'react-redux';

import '../assets/styles/AddTodo.css';

class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: ''
    }
  }
  render() {
    const { placeholderValue, onSubmit } = this.props;
    return (
      <div>
        <form
          className="to-do-form"
          onSubmit={(event) => {
            event.preventDefault();
            let input = event.target.userInput.value;
            if (input) {
              this.setState({ inputValue: input },
                () => onSubmit(this.state.inputValue))
              event.target.userInput.value = "";
            }
          }}
        >
          <input
            type="text"
            name="userInput"
            autoComplete="off"
            placeholder={placeholderValue}
            className="input-field"
          />
          <button type="submit">+</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo);
