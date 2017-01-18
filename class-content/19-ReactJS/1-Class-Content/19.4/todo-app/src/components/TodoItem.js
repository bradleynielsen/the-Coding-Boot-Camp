import React from 'react'

export default class TodoItem extends React.Component {

  constructor() {
    super()
    this.state = {
      done: false
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    const style = {
      cursor: "pointer",
      fontFamily: "sans-serif",
      fontSize: 16,
      color: this.state.done ? "grey" : "black",
      textDecoration: this.state.done ? "line-through" : ""
    }

    return (
      <li onClick={this.onClick} style={style}>{this.props.todo}</li>
    )
  }
}
