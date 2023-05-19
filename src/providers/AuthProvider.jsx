import { useState } from "react";
import { createContext } from "react";
// import { getAuth } from "firebase/auth";
// import app from "../firebase/firebase.config";


export const AuthContext = createContext()
// const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const authInfo = {

    }
    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;