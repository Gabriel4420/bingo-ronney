import { createContext, ReactNode, useState } from 'react'

type UserContextProps = {
  children: ReactNode
}

type UserContextType = {
  isLogged: boolean
  setIsLogged: (newState: boolean) => void
}

const initialValues = {
  isLogged: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsLogged: () => {}
}

export const UserContext = createContext<UserContextType>(initialValues)

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [isLogged, setIsLogged] = useState(initialValues.isLogged)
  return (
    <UserContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </UserContext.Provider>
  )
}
