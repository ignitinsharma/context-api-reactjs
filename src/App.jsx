import { useContext } from 'react';
import './App.css';
import { AppContext } from './ContextAPI/AppContextProvider';

function App() {
  const { data,AlertFun } = useContext(AppContext);
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={AlertFun}>Button</button>
    
    </div>
  );
}

export default App;
