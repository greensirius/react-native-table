import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle
} from 'react-native';

type Props = {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<TextStyle>;
};

export default function Cell(props: Props) {
  let {children, containerStyle, contentStyle} = props;
  let content =
    typeof children === 'string' ? (
      <Text style={[styles.text, contentStyle]}>{children}</Text>
    ) : (
      React.Children.only(children)
    );
  return <View style={[styles.container, containerStyle]}>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#656',
    fontSize: 14
  }
});
