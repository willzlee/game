import React, { Component } from 'react';

export default class Display extends Component {
  render(){
    return (
      <h3>{this.props.message}</h3>
    );
  }
}
