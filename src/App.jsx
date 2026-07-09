import './App.css'
import Hero from './sections/Hero'
import FeatureSection from './sections/FeatureSection'
import WaitlistSection from './sections/WaitlistSection'
import Footer from './sections/Footer'
import PhoneFrame from './components/PhoneFrame'
import DashboardMockup from './components/mockups/DashboardMockup'
import CategoryDonut from './components/charts/CategoryDonut'
import BalanceAreaChart from './components/charts/BalanceAreaChart'
import IncomeExpenseBars from './components/charts/IncomeExpenseBars'

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

      {/* temporary: gets assembled into the Stats mockup in phase 08 */}
      <section className="section">
        <h2>Scratch: CategoryDonut preview</h2>
        <CategoryDonut />
      </section>

      {/* temporary: gets assembled into the Stats mockup in phase 08 */}
      <section className="section">
        <h2>Scratch: BalanceAreaChart preview</h2>
        <BalanceAreaChart />
      </section>

      {/* temporary: gets assembled into the Stats mockup in phase 08 */}
      <section className="section">
        <h2>Scratch: IncomeExpenseBars preview</h2>
        <IncomeExpenseBars />
      </section>
    </div>
  )
}

export default App
