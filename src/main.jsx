import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './header.jsx'
import Body from './body.jsx'
import Footer from './footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode className="bg-slate-900">
    <Header />
    <Body />
    <Footer />
  </StrictMode>,
)
