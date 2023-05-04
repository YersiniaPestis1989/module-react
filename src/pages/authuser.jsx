
import Auth from "../components/auth"

function AuthUser({stateAuth}){

    return (
        <Auth getAuthState={stateAuth} />
    )
}

export default AuthUser