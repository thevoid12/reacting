import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import reactLogo from './assets/react.svg'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Page />
  </StrictMode>
)

function Page() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

function Header() {
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


function Main(){
  return(
            <main>
                <h1>Reason I am excited to learn React</h1>
                <ol>
                    <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                    <li>I am more likely to get a job as a front end developer if I know React</li>
                </ol>
            </main>
  )
}

function Footer(){
  return (
          <footer>
                <small>© 2024 Ziroll development. All rights reserved.</small>
            </footer>
  )
}