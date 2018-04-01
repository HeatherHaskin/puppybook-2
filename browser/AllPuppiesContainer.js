import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';
import { loadPuppies } from './action-creators';

const mapStateToProps = (state) => {
  return {
    allPuppies: state.allPuppies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onloadPuppies: function () {
      const thunk = loadPuppies();
      dispatch(thunk);
    }
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(AllPuppies);

export default Container;
