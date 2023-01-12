import React from "react";
import { createContext } from "react";

/* 
ContextApi having three step Process
C - Create
P - Provide
C - Consume
Step:1 Create Context so here we are creating Context by using this inBuild function 
        createContext()
    
*/

export const AppContext = createContext();

/* 
--> So here we are Making a function and that function returning AppContextProvider
    means what value we can write here and pass using that AppContext.Provider
    we can use anywhere 
    only we have to wrap our main inside 
    <AppContext.Provider>
         <Main/APP>
    </AppContext.Provider>
*/

const AppContextProvider = ({ children }) => {
  const data = "Hello World";

  const AlertFun = () => {
    alert("Hello Brother");
  };

  /* 
    --> SO now in value we are passing that data into that so 
        now after wrapping we can use this any where in the app..
    
    */

  return (
    <AppContext.Provider value={{ data, AlertFun }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
