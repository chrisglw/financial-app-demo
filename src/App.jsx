import './App.css'
import Hero from './sections/Hero'
import FeatureSection from './sections/FeatureSection'
import WaitlistSection from './sections/WaitlistSection'
import Footer from './sections/Footer'
import PhoneFrame from './components/PhoneFrame'
import StatsMockup from './components/mockups/StatsMockup'
import AccountDetailMockup from './components/mockups/AccountDetailMockup'

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

      {/* temporary: account detail mockup gets wired into FeatureSection in phase 13 */}
      <section className="section">
        <h2>Scratch: AccountDetailMockup preview</h2>
        <PhoneFrame>
          <AccountDetailMockup />
        </PhoneFrame>
      </section>
    </div>
  )
}

export default App
