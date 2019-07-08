import * as React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import Row from './Row';
import {formattedTitleText} from '../helpers';

type Columns = {
  [key: string]: {
    title?: string;
    containerStyle?: StyleProp<ViewStyle>;
    contentStyle?: StyleProp<ViewStyle>;
  };
};
type Props = {
  columns?: Columns;
};

export default function Header(props: Props) {
  let {columns} = props;
  let keys = (columns && Object.keys(columns)) || [];
  let rowData = keys.map((key) => {
    let column = columns && columns[key];
    if (column && column.title) {
      return formattedTitleText(column.title, 'lowercase');
    } else {
      return formattedTitleText(key, 'lowercase');
    }
  });
  return columns ? <Row rowData={rowData} /> : null;
}
