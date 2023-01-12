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

/*  Step:1 --> Creating Context phase 

    --> So here we are create context using this function createContext()

    --> And also we are creating one function which is returing that AppContext.Provider 
        data in our whole app

*/

export const AppContext = createContext();




export const AlertFun2 = () => {
  alert("Kya haal hai..");
};



/* 
    --> 
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
    <AppContext.Provider value={{ data, AlertFun, AlertFun2 }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
