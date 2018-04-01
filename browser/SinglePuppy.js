import React, { Component } from 'react';
import store from './store';
import { loadOnePuppy } from './action-creators';
import { Link } from 'react-router-dom';

export default class SinglePuppy extends Component {

  componentDidMount () {
    this.props.onLoadSinglePuppy();
  }

  render () {
    return (
      <div>
        <button><Link to={'/puppies/'}>Go back to ALL THE PUPPIES!</Link></button>
        <h2>{this.props.selectedPuppy.name}</h2>
        <div>
          <img src={this.props.selectedPuppy.image} />
        </div>
      </div>
    );
  }
}
