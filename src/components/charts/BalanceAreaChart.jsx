import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { balanceTimeline } from '../../data/sampleData'
import { useInViewOnce } from '../../hooks/useInViewOnce'
import { axisTickStyle, formatCurrencyTick, tooltipContentStyle, tooltipLabelStyle } from './chartTheme'
import './BalanceAreaChart.css'

function BalanceTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div style={tooltipContentStyle}>
      <div style={tooltipLabelStyle}>{label}</div>
      <div style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
        {formatCurrencyTick(payload[0].value)}
      </div>
    </div>
  )
}

function BalanceAreaChart() {
  const [ref, hasEntered] = useInViewOnce({ threshold: 0.4 })

  return (
    <div className="balance-area-chart" ref={ref}>
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={balanceTimeline} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
          <defs>
            <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.35} />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={axisTickStyle}
            padding={{ left: 8, right: 8 }}
          />
          <Tooltip content={<BalanceTooltip />} cursor={{ stroke: 'var(--color-border)', strokeWidth: 1 }} />
          <Area
            type="monotone"
            dataKey="balance"
            stroke="var(--color-primary)"
            strokeWidth={2}
            fill="url(#balanceGradient)"
            isAnimationActive={hasEntered}
            animationDuration={800}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BalanceAreaChart
