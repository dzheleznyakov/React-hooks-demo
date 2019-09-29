import React from 'react';

class List extends React.Component {
  state = {
    value: '',
    names: [],
  };

  onInputChanged = (event) => {
    this.setState({ value: event.target.value });
  };

  onButtonClicked = (event) => {
    this.setState({
      value: '',
      names: this.state.names.concat([this.state.value]),
    });
  };

  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  componentDidUpdate() {
    if (this.input) {
      this.input.focus();
    }
  }

  render() {    
    return (
      <div className="List">
        <input 
          value={this.state.value}
          type="text" 
          placeholder="Enter name" 
          onChange={this.onInputChanged}
          ref={input => this.input = input}
        />
        <button
          onClick={this.onButtonClicked}>Add</button>
        <ul>
          {this.state.names.map((name, index) => <li key={`li-${index}`}>{name}</li>)}
        </ul>
      </div>
    );
  }
};

export default List;
