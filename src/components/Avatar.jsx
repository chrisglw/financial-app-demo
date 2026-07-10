import './Avatar.css'

const COLORS = ['#6366f1', '#3b82f6', '#f59e0b', '#10b981', '#ec4899', '#7c3aed']

function colorForInitial(initial) {
  const code = initial ? initial.charCodeAt(0) : 0
  return COLORS[code % COLORS.length]
}

function Avatar({ initial, size = 36 }) {
  return (
    <span
      className="avatar"
      style={{ width: size, height: size, fontSize: size * 0.4, background: colorForInitial(initial) }}
    >
      {initial}
    </span>
  )
}

export default Avatar
