import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import FilterLink from './FilterLink';

const Footer = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text>Show: </Text>
      <FilterLink filter='SHOW_ALL'>All</FilterLink>
      <Text>{`, `}</Text>
      <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
      <Text>{`, `}</Text>
      <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
    </View>
  )
}

Footer.propTypes = {
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired,
  onFilterChange: PropTypes.func.isRequired,
}

Footer.defaultProps = {
  filter: 'SHOW_ALL',
  onFilterChange: () => { },
}

export default Footer;
