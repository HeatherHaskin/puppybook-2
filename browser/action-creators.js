import axios from 'axios';

// Action Types

export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';
export const LOAD_PUPPIES = 'LOAD_PUPPIES';
export const SELECT_PUPPY = 'SELECT_PUPPY';


// Action Creators

export const receivePuppies = (puppies) => {
  return {
    type: RECEIVE_PUPPIES,
    receivedPuppies: puppies
  };
};

export const selectPuppy = (puppyToSelect) => {
  return {
    type: SELECT_PUPPY,
    selectedPuppy: puppyToSelect
  };
};

// Thunk Middleware

export const loadPuppies = (puppyId) => {
  return function thunk (dispatch) {
    return axios.get('/api/puppies')
      .then(res => res.data)
      .then(puppies => {
        const action = receivePuppies(puppies);
        dispatch(action);
      })
      .catch(err => console.error(err));
  };

};

export const loadOnePuppy = (puppyId) => {
  return function thunk (dispatch) {
    return axios.get(`/api/puppies/${puppyId}`)
      .then(res => res.data)
      .then(thePuppy => {
        const action = selectPuppy(thePuppy);
        dispatch(action);
      })
      .catch(err => console.error(err));
  };
};
