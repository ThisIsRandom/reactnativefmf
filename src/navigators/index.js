import { useAuthProvider } from "../providers/auth"

import AuthStack from "./auth.stack"
import MainStack from "./main.stack"

const Nav = () => {
    const { state } = useAuthProvider()

    return state?.token
        ? <MainStack />
        : <AuthStack />
}

export default Nav;