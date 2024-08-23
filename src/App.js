// src/App.js

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import DataTable from './components/DataTable';
import 'semantic-ui-css/semantic.min.css';
import './App.scss'; // Ensure this import is present

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Data Dashboard</h1>
        <DataTable />
      </div>
    </Provider>
  );
};

export default App;
