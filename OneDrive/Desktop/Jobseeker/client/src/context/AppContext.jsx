import { createContext } from "react";

const AppContext = createContext()
export const AppContextProvider=()=>{
    const value = {
        
    }
    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}

