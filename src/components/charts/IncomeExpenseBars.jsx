import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { incomeExpenseData } from '../../data/sampleData'
import { useInViewOnce } from '../../hooks/useInViewOnce'
import { axisTickStyle, formatCurrencyTick, tooltipContentStyle, tooltipLabelStyle } from './chartTheme'
import './IncomeExpenseBars.css'

const SERIES = [
  { key: 'income', label: 'Income', color: 'var(--color-income)' },
  { key: 'expense', label: 'Expenses', color: 'var(--color-expense)' },
]

function IncomeExpenseTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div style={tooltipContentStyle}>
      <div style={tooltipLabelStyle}>{label}</div>
      {SERIES.map((series) => {
        const entry = payload.find((item) => item.dataKey === series.key)
        if (!entry) return null
        return (
          <div key={series.key} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span
              style={{ width: 10, height: 2, background: series.color, display: 'inline-block' }}
            />
            <span style={{ color: 'var(--color-text-main)', fontWeight: 700 }}>
              {formatCurrencyTick(entry.value)}
            </span>
            <span style={{ color: 'var(--color-text-muted)' }}>{series.label}</span>
          </div>
        )
      })}
    </div>
  )
}

function IncomeExpenseBars() {
  const [ref, hasEntered] = useInViewOnce({ threshold: 0.4 })

  return (
    <div className="income-expense-bars" ref={ref}>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart
          data={incomeExpenseData}
          margin={{ top: 8, right: 8, left: 8, bottom: 0 }}
          barGap={4}
          barCategoryGap="24%"
        >
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={axisTickStyle}
            padding={{ left: 8, right: 8 }}
          />
          <Tooltip content={<IncomeExpenseTooltip />} cursor={{ fill: 'var(--color-bg-main)' }} />
          {SERIES.map((series) => (
            <Bar
              key={series.key}
              dataKey={series.key}
              fill={series.color}
              radius={[4, 4, 0, 0]}
              maxBarSize={18}
              isAnimationActive={hasEntered}
              animationDuration={700}
              animationEasing="ease-out"
            />
          ))}
        </BarChart>
      </ResponsiveContainer>

      <ul className="income-expense-legend">
        {SERIES.map((series) => (
          <li key={series.key} className="income-expense-legend-item">
            <span className="income-expense-legend-swatch" style={{ background: series.color }} />
            <span>{series.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IncomeExpenseBars
