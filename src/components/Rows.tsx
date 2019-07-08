import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Row from './Row';

type CellContent = string | number | React.ReactNode;
type RowContent = ObjectOf<CellContent> | Array<CellContent>;

type Props = {
  data: Array<RowContent>;
  colors?: Array<string>;
};

export default function Rows(props: Props) {
  let {data, colors} = props;
  let rowColors = colors ? colors : ['#BBB', '#FFF'];
  let tableRows = data.map((row, index) => {
    let backgroundColor = index % 2 === 1 ? rowColors[0] : rowColors[1];
    return <Row key={index} rowData={row} rowStyle={{backgroundColor}} />;
  });
  return <View style={styles.container}>{tableRows}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});
