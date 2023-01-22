import { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) =>{
	
	const [userEmail, setUserEmail] = useState("hello")

	return(
	<UserContext.Provider value={{userEmail, setUserEmail }}>
		{children}
	</UserContext.Provider>
	)
}
export default UserProvider;