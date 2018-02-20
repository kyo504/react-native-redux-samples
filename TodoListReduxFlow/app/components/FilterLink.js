import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

const FilterLink = ({
  active,
  children,
  onClick
}) => {
  let styles = StyleSheet.create({
    normal: {
      color: 'purple',
      textDecorationLine: 'underline',
    },
    selected: {
      color: 'black'
    }
  })

  return (
    <View>
      <Text
        onPress={onClick}
        style={active ? styles.selected : styles.normal}
      >
        {children}
      </Text>
    </View>
  );
};

const mapStateToProps = (
  state,
  ownProps,
) => {
  return {
    active: ownProps.filter == state.visibilityFilter
  }
}

const mapDispatchProps = (
  dispatch,
  ownProps,
) => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
  }
}

export default connect(mapStateToProps, mapDispatchProps)(FilterLink) ;
