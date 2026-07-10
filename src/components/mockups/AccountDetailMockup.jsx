import { Check, CreditCard } from 'lucide-react'
import { accountDetail } from '../../data/sampleData'
import { useInViewOnce } from '../../hooks/useInViewOnce'
import './AccountDetailMockup.css'

const UTILIZATION_TICK_PERCENT = 30

function formatCurrency(amount) {
  return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

function formatBalance(amount) {
  const sign = amount < 0 ? '-' : ''
  return `${sign}${formatCurrency(Math.abs(amount))}`
}

function AccountDetailMockup() {
  const [ref, hasEntered] = useInViewOnce({ threshold: 0.4 })

  return (
    <div className="account-detail-mockup">
      <div className="account-detail-hero">
        <div className="account-detail-hero-top">
          <div className="account-detail-icon">
            <CreditCard size={20} />
          </div>
          <span className="account-detail-type-badge">{accountDetail.type}</span>
        </div>
        <span className="account-detail-name">{accountDetail.name}</span>
        <span className="account-detail-balance">{formatBalance(accountDetail.balance)}</span>
        <span className="account-detail-caption">
          Available Credit: {formatCurrency(accountDetail.availableCredit)} of{' '}
          {formatCurrency(accountDetail.creditLimit)} limit
        </span>
      </div>

      <div className="account-detail-utilization" ref={ref}>
        <span className="account-detail-utilization-label">Credit Utilization</span>
        <div className="account-detail-utilization-track">
          <div className="account-detail-utilization-fill-wrap">
            <div
              className="account-detail-utilization-fill"
              style={{ width: hasEntered ? `${accountDetail.utilizationPercent}%` : '0%' }}
            />
          </div>
          <div className="account-detail-utilization-tick" style={{ left: `${UTILIZATION_TICK_PERCENT}%` }} />
        </div>
        <span className="account-detail-utilization-caption">
          <Check size={13} /> You&apos;re in the good zone.
        </span>
      </div>
    </div>
  )
}

export default AccountDetailMockup
