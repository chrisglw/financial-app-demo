import { Bell, BarChart3, Clock3, Eye, Home, Menu, Plus } from 'lucide-react'
import { dashboardSummary } from '../../data/sampleData'
import './DashboardMockup.css'

function formatCurrency(amount) {
  return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

function DashboardMockup() {
  return (
    <div className="dashboard-mockup">
      <div className="dashboard-header">
        <div className="dashboard-header-top">
          <span className="dashboard-label">Total Balance</span>
          <div className="dashboard-header-icons">
            <button type="button" className="dashboard-icon-btn" aria-label="Notifications">
              <Bell size={18} />
              <span className="dashboard-badge">2</span>
            </button>
            <button type="button" className="dashboard-icon-btn" aria-label="Toggle privacy">
              <Eye size={18} />
            </button>
          </div>
        </div>
        <span className="dashboard-balance">{formatCurrency(dashboardSummary.totalBalance)}</span>
      </div>

      <div className="dashboard-stat-strip">
        <div className="dashboard-stat">
          <span className="dashboard-stat-label">Money You Have</span>
          <span className="dashboard-stat-value dashboard-stat-value--positive">
            {formatCurrency(dashboardSummary.moneyYouHave)}
          </span>
        </div>
        <div className="dashboard-stat-divider" />
        <div className="dashboard-stat">
          <span className="dashboard-stat-label">Money Owed</span>
          <span className="dashboard-stat-value">{formatCurrency(dashboardSummary.moneyOwed)}</span>
        </div>
      </div>

      <nav className="dashboard-nav">
        <button type="button" className="dashboard-nav-btn" aria-label="Home">
          <Home size={20} />
        </button>
        <button type="button" className="dashboard-nav-btn" aria-label="Stats">
          <BarChart3 size={20} />
        </button>
        <button type="button" className="dashboard-nav-btn dashboard-nav-btn--primary" aria-label="Add">
          <Plus size={22} />
        </button>
        <button type="button" className="dashboard-nav-btn" aria-label="Activity">
          <Clock3 size={20} />
        </button>
        <button type="button" className="dashboard-nav-btn" aria-label="Menu">
          <Menu size={20} />
        </button>
      </nav>
    </div>
  )
}

export default DashboardMockup
