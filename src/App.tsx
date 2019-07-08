import React from 'react';
import Rows from './components/Rows';

import {userArrayList} from './fixtures/user-list';
export default function App() {
  return <Rows data={userArrayList} colors={['#DEF', '#FFF']} />;
}
