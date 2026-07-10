import { useState } from 'react'
import { ArrowDownLeft, ArrowLeftRight, ArrowUpRight, Check } from 'lucide-react'
import { splitAllocation } from '../../data/sampleData'
import { useInViewOnce } from '../../hooks/useInViewOnce'
import Avatar from '../Avatar'
import './SplitAllocationMockup.css'

const SEGMENTS = [
  { id: 'expense', label: 'Expense', icon: ArrowUpRight },
  { id: 'income', label: 'Income', icon: ArrowDownLeft },
  { id: 'transfer', label: 'Transfer', icon: ArrowLeftRight },
]

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`
}

function SplitAllocationMockup() {
  const [activeSegment, setActiveSegment] = useState(SEGMENTS[0].id)
  const [ref, hasEntered] = useInViewOnce({ threshold: 0.4 })

  return (
    <div className="split-mockup">
      <div className="split-mockup-segmented">
        {SEGMENTS.map((segment) => {
          const Icon = segment.icon
          return (
            <button
              key={segment.id}
              type="button"
              className={`split-mockup-segment${
                segment.id === activeSegment ? ' split-mockup-segment--active' : ''
              }`}
              onClick={() => setActiveSegment(segment.id)}
            >
              <Icon size={15} />
              {segment.label}
            </button>
          )
        })}
      </div>

      <div className="split-mockup-input-row">
        <div className="split-mockup-input-field">
          <span className="split-mockup-input-label">Merchant</span>
          <span className="split-mockup-input-value">{splitAllocation.merchant}</span>
        </div>
        <div className="split-mockup-input-field split-mockup-input-field--amount">
          <span className="split-mockup-input-label">Amount</span>
          <span className="split-mockup-input-value">{formatCurrency(splitAllocation.amount)}</span>
        </div>
      </div>

      <div className="split-mockup-section-title">Split with</div>
      <div className="split-mockup-chips">
        {splitAllocation.friends.map((friend) => (
          <div key={friend.id} className="split-mockup-chip">
            <Avatar initial={friend.initial} size={40} />
            <span className="split-mockup-chip-name">{friend.name}</span>
            <span className="split-mockup-chip-amount">{formatCurrency(friend.amount)}</span>
          </div>
        ))}
      </div>

      <div className="split-mockup-allocation" ref={ref}>
        <span className={`split-mockup-allocation-label${hasEntered ? ' split-mockup-allocation-label--done' : ''}`}>
          {hasEntered ? (
            <>
              <Check size={13} /> Fully allocated — {formatCurrency(splitAllocation.amount)} of{' '}
              {formatCurrency(splitAllocation.amount)}
            </>
          ) : (
            `Unallocated: ${formatCurrency(splitAllocation.amount)}`
          )}
        </span>
        <div className="split-mockup-allocation-track">
          <div
            className="split-mockup-allocation-fill"
            style={{ width: hasEntered ? '100%' : '0%' }}
          />
        </div>
      </div>
    </div>
  )
}

export default SplitAllocationMockup
