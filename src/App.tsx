import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Authorization from './components/authorization/Authorization';

function App() {
  return (
    <div className="App">
      <Header/>
      <Authorization/>
    </div>
  );
}

export default App;
