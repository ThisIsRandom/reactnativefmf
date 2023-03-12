import { useMemo } from 'react';
import { useAuthProvider } from '../providers/auth';
import { useHttpProvider } from '../providers/http';

const useAuth = () => {
    const client = useHttpProvider();
    const { dispatch } = useAuthProvider()

    const actions = useMemo(() => {
        return {
            login: (email, password) => {
                client.post("/auth/login", { email, password })
                    .then(({ data: { token, user } }) => {
                        dispatch({
                            token,
                            user
                        })
                    })
                    .catch(err => {
                        console.error(err)
                    })
            },
            logout: () => {
                dispatch({ token: null })
            },
            register: (args) => {
                client.post("/auth/register", args)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => console.error(err))
            }
        }
    }, [client])

    return actions
}

export default useAuth;