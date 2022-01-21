import React from 'react';
import './App.css';
import Button from './Button';
import { useSelector } from 'react-redux';
import { selectCount } from './Features/Count';

const App = () => {
  const count = useSelector(selectCount);

  return <div className="App">
    <div className="count">Count : {count}</div>
    <Button buttonName="increase" />
    <Button buttonName="decrease" />
  </div>;
};

export default App;

