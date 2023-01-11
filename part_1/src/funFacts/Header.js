import logo from '../logo.svg'

function Header() {
    return (
        <header>
            <div>
                <img src={logo} alt="Logo do React" width="40px" />
                <nav>
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                </nav>
            </div>
            <div>
                <p>React 1</p>
            </div>
        </header>
    );
}

export default Header;