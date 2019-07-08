import React from 'react';
import Rows from './components/Rows';
import Row from './components/Row';

import {userArrayList} from './fixtures/user-list';
export default function App() {
  return (
    <>
      <Row
        rowData={['Username', 'Password', 'Email']}
        style={{marginHorizontal: 5}}
      />
      <Rows data={userArrayList} colors={['#DEF', '#FFF']} />
    </>
  );
}
