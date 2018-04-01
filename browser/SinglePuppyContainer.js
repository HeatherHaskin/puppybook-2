import { connect } from 'react-redux';
import SinglePuppy from './SinglePuppy';
import { loadOnePuppy } from './action-creators';

const mapStateToProps = (state) => {
  return {
    selectedPuppy: state.selectedPuppy
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoadSinglePuppy: function () {
      const puppyId = ownProps.match.params.puppyId;
      const thunk = loadOnePuppy(puppyId);
      dispatch(thunk);
    }
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(SinglePuppy);

export default Container;
