export const dashboardSummary = {
  totalBalance: 8412.5,
  moneyYouHave: 9120.0,
  moneyOwed: 707.5,
}

export const accounts = [
  { id: 'checking', name: 'Everyday Checking', type: 'CHECKING', balance: 4210.0, color: 'blue' },
  { id: 'savings', name: 'Rainy Day Savings', type: 'SAVINGS', balance: 3500.0, color: 'green' },
  { id: 'credit', name: 'Rewards Visa', type: 'CREDIT CARD', balance: -580.0, color: 'purple' },
  { id: 'loan', name: 'Auto Loan', type: 'LOAN', balance: -12300.0, color: 'purple' },
]

export const transactions = [
  {
    id: 't1',
    merchant: "Supermarket",
    category: 'Groceries › Supermarket',
    amount: -64.2,
    type: 'expense',
    date: 'Jun 28',
  },
  {
    id: 't2',
    merchant: 'Streaming Service',
    category: 'Subscriptions › Streaming',
    amount: -15.49,
    type: 'expense',
    badge: 'Auto · Subscription',
    date: 'Jun 27',
  },
  {
    id: 't3',
    merchant: 'Payroll Deposit',
    category: 'Income › Salary',
    amount: 2400.0,
    type: 'income',
    date: 'Jun 26',
  },
  {
    id: 't4',
    merchant: "Dinner",
    category: 'Dining › Restaurant',
    amount: -84.0,
    type: 'split',
    badge: 'Split · Your share $28.00',
    date: 'Jun 25',
  },
  {
    id: 't5',
    merchant: 'Transfer to Savings',
    category: null,
    amount: -300.0,
    type: 'transfer',
    date: 'Jun 24',
  },
  {
    id: 't6',
    merchant: 'Gas Station',
    category: 'Transport › Fuel',
    amount: -41.1,
    type: 'expense',
    date: 'Jun 23',
  },
]

export const categoryBreakdown = [
  { name: 'Groceries', value: 32 },
  { name: 'Dining', value: 18 },
  { name: 'Transport', value: 15 },
  { name: 'Subscriptions', value: 12 },
  { name: 'Shopping', value: 13 },
  { name: 'Other', value: 10 },
]

export const balanceTimeline = [
  { month: 'Jan', balance: 6200 },
  { month: 'Feb', balance: 6800 },
  { month: 'Mar', balance: 7100 },
  { month: 'Apr', balance: 6950 },
  { month: 'May', balance: 7600 },
  { month: 'Jun', balance: 8412 },
]

export const incomeExpenseData = [
  { month: 'Feb', income: 3800, expense: 2650 },
  { month: 'Mar', income: 4100, expense: 2900 },
  { month: 'Apr', income: 3950, expense: 3100 },
  { month: 'May', income: 4200, expense: 2800 },
  { month: 'Jun', income: 4400, expense: 3050 },
]

export const peerDebt = {
  youAreOwed: 145.0,
  youOwe: 37.5,
  owedByYou: [
    {
      id: 'd1',
      merchant: "Dinner",
      total: 84.0,
      yourShare: 28.0,
      status: 'Payment Pending',
      friendName: 'Jordan',
      friendInitial: 'J',
    },
    {
      id: 'd2',
      merchant: 'Weekend Groceries',
      total: 19.0,
      yourShare: 9.5,
      status: 'Awaiting Response',
      friendName: 'Sam',
      friendInitial: 'S',
    },
  ],
  owedToYou: [
    {
      id: 'd3',
      merchant: 'Weekend Trip Gas',
      total: 120.0,
      theirShare: 60.0,
      status: 'Accepted',
      friendName: 'Alex',
      friendInitial: 'A',
    },
    {
      id: 'd4',
      merchant: 'Concert Tickets',
      total: 170.0,
      theirShare: 85.0,
      status: 'Dispute',
      friendName: 'Riley',
      friendInitial: 'R',
    },
  ],
}

export const accountDetail = {
  name: 'Rewards Visa',
  type: 'CREDIT CARD',
  balance: -580.0,
  creditLimit: 3000.0,
  availableCredit: 2420.0,
  utilizationPercent: 19,
}
