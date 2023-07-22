import React from 'react';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { api } from './src/app/api';
import { Provider } from 'react-redux';
import AppInner from './AppInner';
import { store } from './src/app/store';
import Progress from './src/components/Progress';
import Alert from './src/components/Alert';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <ApiProvider api={api}>
      <Provider store={store}>
        <Helmet>
          <title>SmaDoku</title>
        </Helmet>
        <AppInner />
        <Progress />
        <Alert />
      </Provider>
    </ApiProvider>
  );
}

export default App;
