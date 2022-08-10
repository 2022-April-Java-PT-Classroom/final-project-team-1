import AppRouter from './Components/App-Router';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Portal from './Portal/Portal';
import React from 'react';
import style from './style.module.scss';

const App = () => {

  const isUserPortal = window.location.href.includes('/portal');

  return (
    isUserPortal ?
      <BrowserRouter>
        <Portal />
      </BrowserRouter>
    :
    <div>
      <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
