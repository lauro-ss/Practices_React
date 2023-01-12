import logo from '../logo.svg'
import '../funFactsCss/Header.css';

function Header() {
    return (
        <header>
            <img className="img-logo" src={logo} alt="Logo do React" />
            <nav>
                <ul className='nav-list'>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            </nav>
            <div>
                <p>React 1</p>
            </div>
        </header>
    );
}

export default Header;