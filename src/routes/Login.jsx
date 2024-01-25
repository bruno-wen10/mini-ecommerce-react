import { useRef } from "react"
import { Produtos } from "./Produtos"


export const Login = ()=>{
    const user = useRef()
    const password = useRef()

    const getUser = sessionStorage.getItem('userData')
    const getPassword = sessionStorage.getItem('passwordData')

    const handleSubmit = () =>{
        if(user.current.value === 'Admin' && password.current.value === '1234'){
            //AUTENTICAÇÃO COM TOKEN
            let token = 
            Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
            sessionStorage.setItem('userData', 'Admin')
            sessionStorage.setItem('passwordData',  token)
        } else {
            alert('Usuário ou senha inválidos')
        }
    }

    return (
        <section>
            {/* if ternario */}
            {getUser && getPassword ? (
               <Produtos/>
            ):(
                <form onSubmit={handleSubmit}>

                    <label htmlFor="usuario">Usuario:</label>
                    <input type="text" ref={user} />

                    <label htmlFor="password">Senha:</label>
                    <input type="text" ref={password} />

                    <input type="submit" value='Login' />
                </form>
            ) }
        </section>
    )
}