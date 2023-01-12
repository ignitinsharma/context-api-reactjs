import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppContextProvider from "./ContextAPI/AppContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

//const value = useContext(AppContext);

/* 
Step2: so In the main file we can wrap our whole app inside that Provider
      <AppContextProvider>
        <ChildContext />
      </AppContextProvider>
*/

root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
