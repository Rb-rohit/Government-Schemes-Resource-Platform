import { useState } from 'react'
import TopBanner from './components/layout/TopBanner'
import Header from './components/layout/Header'
import HomePage from './components/pages/HomePage'
import SchemesPage from './components/pages/SchemePage'
import ServicesPage from './components/pages/ServicesPage'
import CertificatesPage from './components/pages/CertificatesPage'
import HelpDeskPage from './components/pages/HelpDeskPage'
import Footer from './components/layout/Footer'
import AIChatbot from './components/AIChatbot'


type Page = 'Home' | 'Schemes' | 'Services' | 'Certificates' | 'Help Desk'


export default function App() {
  const [activePage, setActivePage] = useState<Page>('Home')

  function navigate(p: Page) {
    setActivePage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <TopBanner />
      <Header activePage={activePage} setPage={navigate} />

      <main>
        {activePage === 'Home' && <HomePage navigate={navigate} />}
        {activePage === 'Schemes' && <SchemesPage />}
        {activePage === 'Services' && <ServicesPage />}
        {activePage === 'Certificates' && <CertificatesPage />}
        {activePage === 'Help Desk' && <HelpDeskPage />}
      </main>

      <Footer setPage={navigate} />
      <AIChatbot />
    </div>
  )
}
