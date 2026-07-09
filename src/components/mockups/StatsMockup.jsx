import { useState } from 'react'
import { BarChart3, PieChart, TrendingUp } from 'lucide-react'
import CategoryDonut from '../charts/CategoryDonut'
import BalanceAreaChart from '../charts/BalanceAreaChart'
import IncomeExpenseBars from '../charts/IncomeExpenseBars'
import './StatsMockup.css'

const TABS = [
  { id: 'spending', label: 'Spending', icon: PieChart, Chart: CategoryDonut },
  { id: 'balance', label: 'Balance', icon: TrendingUp, Chart: BalanceAreaChart },
  { id: 'cashflow', label: 'Cash Flow', icon: BarChart3, Chart: IncomeExpenseBars },
]

function StatsMockup() {
  const [activeTab, setActiveTab] = useState(TABS[0].id)
  const active = TABS.find((tab) => tab.id === activeTab) || TABS[0]
  const ActiveChart = active.Chart

  return (
    <div className="stats-mockup">
      <span className="stats-mockup-label">Smart Stats</span>

      <div className="stats-mockup-tabs">
        {TABS.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              type="button"
              className={`stats-mockup-tab${tab.id === activeTab ? ' stats-mockup-tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={15} />
              {tab.label}
            </button>
          )
        })}
      </div>

      <div className="stats-mockup-chart">
        <ActiveChart />
      </div>
    </div>
  )
}

export default StatsMockup
