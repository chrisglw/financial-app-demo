export const axisTickStyle = {
  fontSize: 11,
  fill: 'var(--color-text-muted)',
}

export const tooltipContentStyle = {
  background: 'var(--color-bg-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-md)',
  boxShadow: 'var(--shadow-md)',
  fontSize: 12,
  padding: '8px 12px',
}

export const tooltipLabelStyle = {
  color: 'var(--color-text-muted)',
  fontWeight: 600,
  marginBottom: 4,
}

export const tooltipItemStyle = {
  color: 'var(--color-text-main)',
  fontWeight: 700,
  padding: 0,
}

export function formatCurrencyTick(value) {
  return `$${value.toLocaleString('en-US')}`
}
