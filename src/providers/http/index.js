import axios from 'axios';
import { createContext, useContext, useMemo } from 'react';

import { useAuthProvider } from '../auth'

const HttpContext = createContext()

const HttpProvider = ({ children }) => {
    const { state: { token } } = useAuthProvider()

    const client = useMemo(() => {
        const _client = axios.create({
            baseURL: "http://10.0.2.2:3000/api"
        })

        _client.interceptors.request.use(config => {
            config.headers.Authorization = "Bearer " + (token || "")
            return config;
        }, err => Promise.reject(err))

        return _client
    }, [token])

    return (
        <HttpContext.Provider
            value={client}
        >
            {
                children
            }
        </HttpContext.Provider>
    )
}

const useHttpProvider = () => useContext(HttpContext)

export {
    HttpProvider,
    useHttpProvider
}