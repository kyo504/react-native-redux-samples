import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Link = ({
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

class FilterLink extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    return (
      <Link
        active={props.filter == state.visibilityFilter}
        onClick={() => store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter: props.filter,
        })}
      >
        {props.children}
      </Link>
    )
  }
}

FilterLink.contextTypes = {
  store: React.PropTypes.object,
}

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