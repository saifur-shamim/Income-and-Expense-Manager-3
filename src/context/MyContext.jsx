import {createContext,useState } from "react";

export const MyContext=createContext({});

function MyProviders({ children }) {
   
    const [data, setData] = useState([]);    
    const [editIndex, setEditIndex] = useState(null);
    const [values, setValues] = useState({
      details: "",
      amount: "",
      type: "",
    });

    return (<MyContext.Provider value={{ data, setData,editIndex, setEditIndex,values,setValues }}>
        {children}
    </MyContext.Provider>);
}

export default MyProviders;