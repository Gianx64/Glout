import React, { useEffect, useReducer } from 'react';

interface AuthState {
    validando: boolean,
    token: string | null,
    username: string | null,
    nombre: string | null,
    email?: string,
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: null,
    nombre: null,
}

type AuthAction = { type: 'login' } | { type: 'logout' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch(action.type){
        case 'login':
            return {
                ...state,
                validando: false,
                token: 'nbhbcjhjhckjdc',
                username: 'Gianx64',
                nombre: 'Giancarlo Anfossy',
                email: 'giancarlo.anfossya@utem.cl'
            }
        case 'logout':
            return {
                ...state,
                validando: false,
                token: null,
                username: null,
                nombre: null
            }
        default: 
            return state
    }
}

export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 2000)
    }, [])

    if(state.validando){
        return (
            <p style={{color: 'black', fontSize: 40}}>Obteniendo información...</p>
        )
    }

    if(!state.validando){
        if( state.token ){
            return (
                <>
                    <p>
                        Hola {state.username}
                    </p>
                    <button onClick={() => dispatch({type: 'logout'})}>Cerrar sesión</button>
                </>
            )
        }

        return (
            <button onClick={() => dispatch({type: 'login'})}>Iniciar sesión</button>
        )
    }

    return <></>
}
