import "./App.css";
import { useContext } from "react";
import { AppContext } from "./ContextAPI/AppContextProvider";

function App() {

  /* 
  --> For access that AppContext data we have to use useContext Function and inside 
      this name of which context we created --> useContext(AppContext)

      Then we simple destructuring that this we want to use and then simpliy
      using we are and consuming things...

  */

  const { data, AlertFun, AlertFun2 } = useContext(AppContext);
  return (
    <div className="App">
      <h3>{data}</h3>
      <button onClick={AlertFun}>Alert_Button</button>
      <br />
      <br />
      <button onClick={AlertFun2}>Alert_Button 2</button>
    </div>
  );
}

export default App;
