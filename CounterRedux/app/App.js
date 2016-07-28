'use strict';

import React, { Component } from 'react';
import * as actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Counter from './Counter'

class App extends Component {
  render() {
    const { count, actions } = this.props;
    return (
      <Counter 
        value={count}
        {...actions}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
