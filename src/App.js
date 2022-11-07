import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import history from './services/history';
import Routes from './routes';
import Header from './components/Header';
import MenuLateral from './components/MenuLateral';
import GlobalStyles, { GlobalContainer } from './styles/GlobalStyles';

function App() {
  return (
    <Router history={history}>
      <GlobalStyles />
      <Header />
      <GlobalContainer>
        <MenuLateral />
        <Routes />
      </GlobalContainer>
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}

export default App;
