import React,{useState,useEffect} from "react";
import { getLocalStorage } from "../utils/localStorage";
export const AuthContext = React.createContext();
const AuthProvider = ({ children }) => {
    const[userData,setUserData]=useState(null)
    useEffect(()=>{
        const {employeeData,adminData}=getLocalStorage()
        setUserData(employeeData)
    },[])
    return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
