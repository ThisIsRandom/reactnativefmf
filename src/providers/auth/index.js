import { createContext, useContext, useReducer } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        return {
            ...state,
            ...action
        }
    }, {
        token: null,
        user: null
    })

    return (
        <AuthContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {
                children
            }
        </AuthContext.Provider>
    )
}

const useAuthProvider = () => {
    return useContext(AuthContext)
}

export {
    AuthProvider,
    useAuthProvider
}