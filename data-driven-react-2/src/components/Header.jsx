import reactLogo from '../assets/react.svg'

export default function Header(){
    return (
        <header className="header">
            <img src={reactLogo}></img>
            <h1>My travel journal</h1>
        </header>
    )
}