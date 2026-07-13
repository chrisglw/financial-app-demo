import { ArrowRight } from 'lucide-react'
import PhoneFrame from '../components/PhoneFrame'
import DashboardMockup from '../components/mockups/DashboardMockup'
import './Hero.css'

function Hero() {
  return (
    <section className="section section-hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="hero-eyebrow">Strategy Engine</span>
          <h1 className="hero-headline">Optimize Your Financial Trajectory</h1>
          <p className="hero-subheadline">
            Vector turns your accounts, split expenses, and spending patterns into one
            precise picture — no spreadsheets, no guessing, no IOUs you forget about.
          </p>
          <form className="hero-waitlist-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="hero-waitlist-input"
              placeholder="you@email.com"
              aria-label="Email address"
              required
            />
            <button type="submit" className="hero-waitlist-submit">
              Join Waitlist
              <ArrowRight size={16} />
            </button>
          </form>
        </div>

        <div className="hero-mockup">
          <PhoneFrame>
            <DashboardMockup />
          </PhoneFrame>
        </div>
      </div>
    </section>
  )
}

export default Hero
