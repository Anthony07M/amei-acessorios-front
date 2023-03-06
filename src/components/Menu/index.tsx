import { Link } from "react-router-dom"
import { Nav } from "./styles"

export const Menu = () => {
    return (
        <Nav>
            <div className="header-menu">
                <h2>Xequemate</h2>
                <Link to="/registro">Usuários</Link>
                <Link to="/produtos">Produtos</Link>
                <Link to="/vendas">Vendas</Link>
            </div>
            <Link to="/sair">Sair</Link>
        </Nav>
    )
}