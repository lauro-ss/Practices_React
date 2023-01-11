import logo from '../logo.svg'

function Header() {
    return (
        <header>
            <div>
                <img src={logo} alt="Logo do React" width="40px" />
                <nav>
                    <ul>Option 1</ul>
                    <ul>Option 2</ul>
                    <ul>Option 3</ul>
                </nav>
            </div>
            <div>
                <p>React 1</p>
            </div>
        </header>
    );
}

export default Header;