import React, { Component } from 'react';
import store from './store';
import { loadOnePuppy } from './action-creators';

export default class SinglePuppy extends Component {

  componentDidMount () {
    this.props.onLoadSinglePuppy();
  }

  render () {
    return (
      <div>
        <h2>{this.props.selectedPuppy.name}</h2>
        <div>
          <img src={this.props.selectedPuppy.image} />
        </div>
      </div>
    );
  }
}
