import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Nav/Nav.component.jsx'
import Header from './Content/Header/Header.component.jsx'
import Last from './Content/LatestEpisodes/LatestEpisodes.component.jsx'
import Content from './Content/Content.component.jsx'
import Footer from './Content/Footer/Footer.component.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Header />
    <Last />
    <Content />
    <Footer />
  </StrictMode>,
)
