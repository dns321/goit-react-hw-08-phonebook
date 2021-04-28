import React from 'react';
import './App.scss';
import Container from './Components/container/Container';
import Header from './Components/header/Header';
import Main from './Components/main/Main';

const App = () => {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
};

export default App;
