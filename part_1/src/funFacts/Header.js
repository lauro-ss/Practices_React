import logo from '../logo.svg'

function Header() {
    return (
        <header>
            <div>
                <img src={logo} alt="Logo do React" width="40px" />
            </div>
            <div>
                <p>React 1</p>
            </div>
        </header>
    );
}

export default Header;