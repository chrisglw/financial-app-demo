import './App.css'
import Hero from './sections/Hero'
import FeatureSection from './sections/FeatureSection'
import WaitlistSection from './sections/WaitlistSection'
import Footer from './sections/Footer'
import PhoneFrame from './components/PhoneFrame'
import DashboardMockup from './components/mockups/DashboardMockup'
import TransactionRow from './components/TransactionRow'
import { transactions } from './data/sampleData'

function App() {
  return (
    <div className="page">
      <Hero />
      <FeatureSection title="Smart Stats" />
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

      {/* temporary: remove once the dashboard mockup renders this list */}
      <section className="section">
        <h2>Scratch: TransactionRow preview</h2>
        {transactions.map((t) => (
          <TransactionRow key={t.id} {...t} />
        ))}
      </section>
    </div>
  )
}

export default App
