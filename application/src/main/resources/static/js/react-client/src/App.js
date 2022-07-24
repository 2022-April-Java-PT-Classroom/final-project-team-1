import AppRouter from './Components/App-Router';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import React from 'react';
import style from './style.module.scss';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <div className={style.page} >
        <AppRouter />
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
