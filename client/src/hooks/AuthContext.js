import {useState, createContext} from 'react';


const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)

  const signIn = (user) => {
    setUser(user)
  }

  const signOut = () => {
    setUser(null)
  }

  return ( 
  <AuthContext.Provider value={[user, signIn, signOut]}>
    {children}
  </AuthContext.Provider>)
}

export {AuthContext, AuthProvider}