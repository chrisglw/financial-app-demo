import './App.css'
import Hero from './sections/Hero'
import FeatureSection from './sections/FeatureSection'
import WaitlistSection from './sections/WaitlistSection'
import Footer from './sections/Footer'
import PhoneFrame from './components/PhoneFrame'
import DashboardMockup from './components/mockups/DashboardMockup'
import StatsMockup from './components/mockups/StatsMockup'

function App() {
  return (
    <div className="page">
      <Hero />
      <FeatureSection
        title="Smart Stats"
        copy="Track spending by category, watch your balance trend, and compare income to expenses — all in one glance, no spreadsheets required."
        mockup={<StatsMockup />}
      />
      <FeatureSection title="Split Bills Without the Awkwardness" />
      <FeatureSection title="Effortless Entry" />
      <FeatureSection title="Know Your Accounts" />
      <WaitlistSection />
      <Footer />

      {/* temporary: dashboard mockup gets moved into Hero in phase 12 */}
      <section className="section">
        <h2>Scratch: DashboardMockup preview</h2>
        <PhoneFrame>
          <DashboardMockup />
        </PhoneFrame>
      </section>
    </div>
  )
}

export default App
