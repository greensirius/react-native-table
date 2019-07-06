import * as React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import Cell from './Cell';
import {isArray, isObject} from '../helpers';

type CellContent = string | number | React.ReactNode;
type RowContent = ObjectOf<CellContent> | Array<CellContent>;
type Props = {
  rowData: RowContent;
  rowHeight?: number;
  rowStyle?: StyleProp<ViewStyle>;
};

const ROW_HEIGHT = 32;

export default function Row(props: Props) {
  let {rowData, rowHeight, rowStyle} = props;
  let extractObjectData = (params: RowContent) => {
    let keys = Object.keys(params);
    return keys.map((key, index) => <Cell key={index}>{params[key]}</Cell>);
  };
  let extractArrayData = (params: any) => {
    return params.map((column, index) => <Cell key={index}>{column}</Cell>);
  };
  let content = isObject(rowData)
    ? extractObjectData(rowData)
    : isArray(rowData)
    ? extractArrayData(rowData)
    : null;
  return (
    <View
      style={[styles.rowContainer, rowStyle, {height: rowHeight || ROW_HEIGHT}]}
    >
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row'
  }
});
