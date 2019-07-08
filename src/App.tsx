import React from 'react';
import Rows from './components/Rows';
import Header from './components/Header';

import {userArrayList, userTableStructure} from './fixtures/user-list';

export default function App() {
  return (
    <>
      <Header columns={userTableStructure} />
      <Rows data={userArrayList} colors={['#DEF', '#FFF']} />
    </>
  );
}
