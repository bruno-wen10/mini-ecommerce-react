import { Link } from "react-router-dom"

export const Erro=()=>{

    return (
        <>
        <h1>PAGINA NÃO ENCONTRADA</h1>
        <p>Voltar para página inicial: <span><Link to={'/'}>Voltar</Link></span></p>
        </>
    )
}