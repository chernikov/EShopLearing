import React, { useState } from 'react';
import './App.css';
import { Button, Header, TextField } from './components';

const App = () => {
  const headerValue = "Welcome to our shop";

  const [val, setVal] = useState("");

  let name = null;
  //let candName : string | null = null;


  const onBtnClick = () => {
    alert(`Hello ${val}!`);
  }

  const onChangeText = (event : any) => {    
    setVal(event.target.value)
  }

  return (
    <>
      <div style={{ "padding": "20px" }}>
        {name && <Header header={headerValue} name={name} />}
        {name ?? <>
          <TextField label={"What is your name?"} onChange={onChangeText}/>
          <Button value={"Ok"} onClick={onBtnClick} />
        </>}
      </div>
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    </>
  );
}

export default App;
