import { peerDebt } from '../../data/sampleData'
import Avatar from '../Avatar'
import './PeerDebtMockup.css'

const PILL_VARIANT_BY_STATUS = {
  'Payment Pending': 'pending',
  'Awaiting Response': 'pending',
  Accepted: 'accepted',
  Dispute: 'dispute',
}

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`
}

function StatusPill({ status }) {
  const variant = PILL_VARIANT_BY_STATUS[status] || 'pending'
  return <span className={`peer-debt-pill peer-debt-pill--${variant}`}>{status}</span>
}

function OweCard({ entry }) {
  return (
    <div className="peer-debt-card peer-debt-card--owe">
      <Avatar initial={entry.friendInitial} />
      <div className="peer-debt-card-main">
        <span className="peer-debt-card-title">{entry.merchant}</span>
        <span className="peer-debt-card-sub">
          Split {formatCurrency(entry.total)} · your share {formatCurrency(entry.yourShare)}
        </span>
      </div>
      <StatusPill status={entry.status} />
    </div>
  )
}

function OwedCard({ entry }) {
  return (
    <div className="peer-debt-card peer-debt-card--owed">
      <Avatar initial={entry.friendInitial} />
      <div className="peer-debt-card-main">
        <span className="peer-debt-card-title">
          {entry.friendName} owes you {formatCurrency(entry.theirShare)}
        </span>
        <span className="peer-debt-card-sub">for &quot;{entry.merchant}&quot;</span>
      </div>
      <StatusPill status={entry.status} />
    </div>
  )
}

function PeerDebtMockup() {
  return (
    <div className="peer-debt-mockup">
      <div className="peer-debt-hero">
        <span className="peer-debt-hero-label">Peer Balance</span>
        <p className="peer-debt-hero-summary">
          <span className="peer-debt-hero-summary--positive">
            You are owed {formatCurrency(peerDebt.youAreOwed)}
          </span>
          <span className="peer-debt-hero-dot">·</span>
          <span>You owe {formatCurrency(peerDebt.youOwe)}</span>
        </p>
      </div>

      <div className="peer-debt-section-title">You Owe</div>
      <div className="peer-debt-list">
        {peerDebt.owedByYou.map((entry) => (
          <OweCard key={entry.id} entry={entry} />
        ))}
      </div>

      <div className="peer-debt-section-title">They Owe You</div>
      <div className="peer-debt-list">
        {peerDebt.owedToYou.map((entry) => (
          <OwedCard key={entry.id} entry={entry} />
        ))}
      </div>

      <p className="peer-debt-caption">
        Real-time settlement tracking — no more spreadsheets or IOUs you forget about.
      </p>
    </div>
  )
}

export default PeerDebtMockup
