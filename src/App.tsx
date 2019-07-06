import React from 'react';
import {StyleSheet, View} from 'react-native';
import Row from './components/Row';
import {userArrayList, userObjectList} from './fixtures/user-list';
export default function App() {
  return (
    <View style={styles.container}>
      <Row rowData={userObjectList[0]} rowStyle={{backgroundColor: '#0AF'}} />
      <Row rowData={userArrayList[0]} rowStyle={{backgroundColor: '#DEF'}} />
      <Row rowData={userObjectList[0]} rowStyle={{backgroundColor: '#0AF'}} />
      <Row rowData={userArrayList[0]} rowStyle={{backgroundColor: '#DEF'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#FFF'
  }
});
