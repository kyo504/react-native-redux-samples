/**
 * @flow
 */
import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

type Props = {
  onPress: Function,
  text: string,
};

export default (props: Props) => {
  const { onPress, text } = props;
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={{ width: 20, borderWidth: 1, borderColor: 'black' }}>
        <Text style={{ textAlign: 'center' }}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};
