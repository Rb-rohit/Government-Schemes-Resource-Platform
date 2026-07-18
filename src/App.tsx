import { useState } from 'react'
import TopBanner from './components/layout/TopBanner'
import Header from './components/layout/Header'
import HomePage from './components/pages/HomePage'
import SchemesPage from './components/pages/SchemePage'
import ServicesPage from './components/pages/ServicesPage'
import CertificatesPage from './components/pages/CertificatesPage'
import HelpDeskPage from './components/pages/HelpDeskPage'
import JobsPage from './components/pages/JobsPage'
import AuthPage from './components/pages/AuthPage'
import DashboardPage from './components/pages/DashboardPage'
import Footer from './components/layout/Footer'
import AIChatbot from './components/AIChatbot'


type Page = 'Home' | 'Schemes' | 'Services' | 'Certificates' | 'Help Desk' | 'Jobs' | 'Dashboard' | 'Login' | 'Register'


export default function App() {
  const [activePage, setActivePage] = useState<Page>('Home')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<{ name: string } | null>(null)

  function navigate(p: Page) {
    // protect dashboard
    if (p === 'Dashboard' && !isAuthenticated) {
      setActivePage('Login')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    setActivePage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleAuth(u: { name: string }) {
    setUser(u)
    setIsAuthenticated(true)
    setActivePage('Dashboard')
  }

  function handleLogout() {
    setUser(null)
    setIsAuthenticated(false)
    setActivePage('Home')
  }

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <TopBanner />
      <Header activePage={activePage} setPage={navigate} isAuthenticated={isAuthenticated} userName={user?.name} onLogout={handleLogout} />

      <main>
        {activePage === 'Home' && <HomePage navigate={navigate} />}
        {activePage === 'Schemes' && <SchemesPage />}
        {activePage === 'Services' && <ServicesPage />}
        {activePage === 'Certificates' && <CertificatesPage />}
        {activePage === 'Help Desk' && <HelpDeskPage />}
        {activePage === 'Jobs' && <JobsPage />}
        {activePage === 'Login' && <AuthPage onAuth={handleAuth} mode="login" />}
        {activePage === 'Register' && <AuthPage onAuth={handleAuth} mode="register" />}
        {activePage === 'Dashboard' && isAuthenticated && <DashboardPage navigate={navigate} user={user} onLogout={handleLogout} />}
      </main>

      <Footer setPage={navigate} />
      <AIChatbot />
    </div>
  )
}
