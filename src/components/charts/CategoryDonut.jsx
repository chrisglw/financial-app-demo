import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { categoryBreakdown } from '../../data/sampleData'
import { useInViewOnce } from '../../hooks/useInViewOnce'
import './CategoryDonut.css'

const SLICE_COLORS = [
  'var(--color-primary)', // Groceries
  'var(--color-transfer)', // Dining
  '#d97706', // Transport
  'var(--color-primary-hover)', // Subscriptions
  '#6366f1', // Shopping
  '#ec4899', // Other
]

const total = categoryBreakdown.reduce((sum, slice) => sum + slice.value, 0)
const topSlice = categoryBreakdown.reduce((max, slice) => (slice.value > max.value ? slice : max))

function CategoryDonut() {
  const [ref, hasEntered] = useInViewOnce({ threshold: 0.4 })

  return (
    <div className="category-donut" ref={ref}>
      <div className="category-donut-chart">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={categoryBreakdown}
              dataKey="value"
              nameKey="name"
              innerRadius="65%"
              outerRadius="100%"
              paddingAngle={2}
              startAngle={90}
              endAngle={-270}
              isAnimationActive={hasEntered}
              animationDuration={700}
            >
              {categoryBreakdown.map((slice, index) => (
                <Cell key={slice.name} fill={SLICE_COLORS[index % SLICE_COLORS.length]} stroke="none" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="category-donut-center">
          <span className="category-donut-center-value">{Math.round((topSlice.value / total) * 100)}%</span>
          <span className="category-donut-center-label">{topSlice.name}</span>
        </div>
      </div>

      <ul className="category-donut-legend">
        {categoryBreakdown.map((slice, index) => (
          <li key={slice.name} className="category-donut-legend-item">
            <span
              className="category-donut-legend-swatch"
              style={{ background: SLICE_COLORS[index % SLICE_COLORS.length] }}
            />
            <span className="category-donut-legend-name">{slice.name}</span>
            <span className="category-donut-legend-value">{slice.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryDonut
