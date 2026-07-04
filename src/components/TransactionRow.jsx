import { ArrowDownLeft, ArrowLeftRight, ArrowUpRight, Users } from 'lucide-react'
import './TransactionRow.css'

const ICON_BY_TYPE = {
  income: ArrowDownLeft,
  expense: ArrowUpRight,
  transfer: ArrowLeftRight,
  split: Users,
}

function formatAmount(amount) {
  const sign = amount > 0 ? '+' : ''
  return `${sign}$${Math.abs(amount).toFixed(2)}`
}

function TransactionRow({ merchant, category, amount, type, badge, date }) {
  const Icon = ICON_BY_TYPE[type] || ArrowUpRight

  return (
    <div className="transaction-row">
      <div className={`transaction-row-icon transaction-row-icon--${type}`}>
        <Icon size={18} />
      </div>
      <div className="transaction-row-main">
        <span className="transaction-row-merchant">{merchant}</span>
        {category && <span className="transaction-row-category">{category}</span>}
      </div>
      <div className="transaction-row-meta">
        <span className={`transaction-row-amount transaction-row-amount--${type}`}>
          {formatAmount(amount)}
        </span>
        <span className="transaction-row-date">{date}</span>
        {badge && <span className="transaction-row-badge">{badge}</span>}
      </div>
    </div>
  )
}

export default TransactionRow
