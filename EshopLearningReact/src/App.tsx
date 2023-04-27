import React, {useState, useEffect} from 'react';
import { Button, Header, TextField } from './components';
import {useGreeting } from "./hooks";
import {StringOrNull} from "./types";
import {NameService} from "./services/name.service";


const App = () => {
  const nameService = new NameService();
  const headerValue = "Welcome to our shop";
  const [name, setName] = useState<StringOrNull>(null);
  const {getName, onChangeName } = useGreeting(); 

  useEffect(() => {
    console.log("Effect", name);
  }, [name]); 



  const onBtnClick = () => {
    debugger;
    let _name = getName();
    setName(_name);
    if (typeof(name) === "string") {
      const result = nameService.post(name);
      console.log(result);
    }
   
  }

  return (
    <>
      <div style={{ "padding": "20px" }}>
        {name && <Header header={headerValue} name={name} />}
        {name || <div>
          <TextField label={"What is your name?"} onChange={onChangeName}/>
          <Button value={"Ok"} onClick={onBtnClick} />
        </div>}
      </div>
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    </>
  );
}

export default App;