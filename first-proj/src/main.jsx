import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer  from './components/Footer.jsx'
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
            <MainContent />
            <Footer />
        </>
    )
}




