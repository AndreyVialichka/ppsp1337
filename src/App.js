import logo from './logo.svg';
import './App.css';
import React from 'react'
import { redirect, useNavigate } from 'react-router-dom';





function App() {


  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`form`);
}
  return (
    <div className="App">
      <button onClick={onClickHandler}>
            FORM
        </button>
    </div>
  );
}

export default App;
