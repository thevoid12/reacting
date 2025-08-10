import reactLogo from '../assets/react.svg'
export default function Header() {
    return (
        <header  className='nav'>
            <img src={reactLogo} width="40px" alt="React logo" />
            <nav className="nav-in">
                <ul className="nav-header">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}