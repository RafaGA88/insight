import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import history from './services/history';
import Routes from './routes';
import MenuLateral from './components/MenuLateral';
import Header from './components/Header';
import GlobalStyles, {
  GlobalContainer,
  GlobalContainerBlock,
} from './styles/GlobalStyles';

function App() {
  return (
    <Router history={history}>
      <GlobalStyles />
      <GlobalContainer>
        <MenuLateral />
        <GlobalContainerBlock>
          <Header />
          <Routes />
        </GlobalContainerBlock>
      </GlobalContainer>
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}

export default App;
