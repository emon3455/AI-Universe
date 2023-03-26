import React from 'react';
import Button from './Components/Button/Button';
import CardContainer from './Components/CardContainer/CardContainer';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <>
        <Header></Header>
        <Button>Sort By Date</Button>

        <CardContainer></CardContainer>

    </>
  );
};

export default App;
