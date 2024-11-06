import './header.css'

function Header() {
    const url = '../assets/logomarca/logomarca.svg'
    return (
        <>
            <header>
                <nav className="nav-header">
                    <a href="#"><img src={url} className="img-nav-header" alt="Logomarca do sistema 'Ambientalização'" title="Logomarca do sistema 'Ambientalização'"/></a>
                    <ul>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Metas</a></li>
                        <li><a href="#">Eventos</a></li>
                        <li><a href="#">Perto de mim</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Cadastre-se</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;