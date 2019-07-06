import React from 'react';
import {StyleSheet, View} from 'react-native';
import Cell from './components/Cell';
export default function App() {
  return (
    <View style={styles.container}>
      <Cell
        containerStyle={{
          backgroundColor: '#1DE'
        }}
      >
        Cell 1
      </Cell>
      <Cell
        containerStyle={{backgroundColor: '#DDE'}}
        contentStyle={{color: '#222'}}
      >
        Cell 2
      </Cell>
      <Cell
        containerStyle={{
          backgroundColor: '#DAEAAE'
        }}
      >
        Cell 3
      </Cell>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: 'stretch',
    flexDirection: 'row',
    backgroundColor: '#FFF'
  }
});
