import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Row from './Row';

type CellContent = string | number | React.ReactNode;
type RowContent = ObjectOf<CellContent> | Array<CellContent>;

type Props = {
  data: Array<RowContent>;
  colors?: Array<string>;
};

const DEFAULT_WIDTH = StyleSheet.hairlineWidth;

export default function Rows(props: Props) {
  let {data, colors} = props;
  let rowColors = colors ? colors : ['#FFF'];
  let tableRows = data.map((row, index) => {
    let backgroundColor = rowColors[index % rowColors.length];
    return (
      <Row
        key={index}
        rowData={row}
        style={{backgroundColor, borderTopWidth: DEFAULT_WIDTH}}
      />
    );
  });
  return <View style={styles.container}>{tableRows}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderWidth: DEFAULT_WIDTH
  }
});
