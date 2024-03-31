import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { router } from './App';
import { RouterProvider } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
