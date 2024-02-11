import React from 'react';
import {View, Text} from 'react-native';
import DemoApp from './DemoApp';
import {Provider} from 'react-redux';
import {store} from './store';
const App = () => {
  return (
    <Provider store={store}>
      <DemoApp />
    </Provider>
  );
};

export default App;
