import React, { PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

const Footer = ({
  filter,
  onFilterChange,
}) => {

  let styles = StyleSheet.create({
    normal: {
      color:'purple',
      textDecorationLine:'underline',
    },
    selected: {
      color:'black'
    }
  })

  return (
    <View style={{flexDirection:'row'}}>
      <Text>
        <Text>Show: </Text>
        <Text 
          style={filter==='SHOW_ALL' ? styles.selected : styles.normal} 
          onPress={() => onFilterChange('SHOW_ALL')}>
          All
        </Text>
        ,{' '}
        <Text 
          style={filter==='SHOW_COMPLETED' ? styles.selected : styles.normal} 
          onPress={() => onFilterChange('SHOW_COMPLETED')}>
        Completed
        </Text>
        ,{' '} 
        <Text 
          style={filter==='SHOW_ACTIVE' ? styles.selected : styles.normal} 
	        onPress={() => onFilterChange('SHOW_ACTIVE')}>
        Active
        </Text>
      </Text>
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
  onFilterChange: () => {},
}

export default Footer;