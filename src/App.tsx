import React from 'react'
import { AppRoutes } from './routes/AppRoutes'
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import './assets/scss/styles.scss';
export const App = () => {
  return (
   
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  
    
  )
}
