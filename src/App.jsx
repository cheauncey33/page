import Header from './components/Header.jsx'
import ProfileHead from './components/ProfileHead.jsx'
import Hero from './components/Hero.jsx'
import Timeline from './components/Timeline.jsx'
import Work from './components/Work.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'
import { I18nProvider } from './i18n.jsx'

export default function App() {
  return (
    <I18nProvider>
      <div className="page-shell">
        <Header />
        <main>
          <ProfileHead />
          <Hero />
          <Timeline />
          <Work />
          <Skills />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}
