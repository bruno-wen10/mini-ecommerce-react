import { Link } from "react-router-dom"
export const Nav = () => { 
    
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to = {'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/sobre'}>Sobre</Link>
                    </li>
                    <li>
                        <Link to={'/produtos'}>Produtos</Link>
                    </li>
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
 }