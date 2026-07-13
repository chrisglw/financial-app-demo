import './App.css'
import Hero from './sections/Hero'
import FeatureSection from './sections/FeatureSection'
import WaitlistSection from './sections/WaitlistSection'
import Footer from './sections/Footer'
import StatsMockup from './components/mockups/StatsMockup'
import PeerDebtMockup from './components/mockups/PeerDebtMockup'
import SplitAllocationMockup from './components/mockups/SplitAllocationMockup'
import AccountDetailMockup from './components/mockups/AccountDetailMockup'

function App() {
  return (
    <div className="page">
      <Hero />

      <FeatureSection
        eyebrow="Insights"
        title="Smart Stats"
        copy="Track spending by category, watch your balance trend, and compare income to expenses — all in one glance, no spreadsheets required."
        mockup={<StatsMockup />}
      />

      <FeatureSection
        reverse
        eyebrow="The Differentiator"
        title="Split Bills Without the Awkwardness"
        copy="Vector treats shared expenses like a real ledger, not a calculator. Track who owes what across every split, watch settlements move in real time, and stop digging through a group chat to remember who paid for what."
        mockup={<PeerDebtMockup />}
      />

      <FeatureSection
        eyebrow="Quick Capture"
        title="Effortless Entry"
        copy="Log an expense, split it with friends, and watch the allocation bar fill to the last cent — no mental math, no back-and-forth about who owes what."
        mockup={<SplitAllocationMockup />}
      />

      <FeatureSection
        reverse
        eyebrow="Account Health"
        title="Know Your Accounts"
        copy="See exactly where you stand — balance, available credit, and utilization at a glance. Vector surfaces the zones that matter before they become a problem, not after your statement closes."
        mockup={<AccountDetailMockup />}
      />

      <WaitlistSection />
      <Footer />
    </div>
  )
}

export default App
