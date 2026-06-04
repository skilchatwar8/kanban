// ===== COLUMN DEFINITIONS =====
// Each column has an id, label, and color for the dot indicator
export const COLUMNS = [
  { id: 'backlog',    label: 'Backlog',      color: '#888780' },
  { id: 'todo',       label: 'To Do',        color: '#378ADD' },
  { id: 'inprogress', label: 'In Progress',  color: '#EF9F27' },
  { id: 'review',     label: 'Review',       color: '#7F77DD' },
  { id: 'done',       label: 'Done',         color: '#639922' },
]

// ===== TAG OPTIONS =====
export const TAGS = ['feature', 'bug', 'task', 'ui', 'api']

// ===== PRIORITY OPTIONS =====
export const PRIORITIES = [
  { value: 'high',   label: '🔴 High'   },
  { value: 'medium', label: '🟡 Medium' },
  { value: 'low',    label: '🟢 Low'    },
]

// ===== INITIAL CARDS =====
// This is the default data shown when the app first loads
export const INITIAL_CARDS = [
  { id: 1, col: 'backlog',    title: 'Set up ReactJS project with Vite',      tag: 'task',    priority: 'medium', assignee: 'SK' },
  { id: 2, col: 'backlog',    title: 'Design component folder structure',      tag: 'task',    priority: 'medium', assignee: 'RK' },
  { id: 3, col: 'todo',       title: 'Build reusable Card component',          tag: 'ui',      priority: 'high',   assignee: 'SK' },
  { id: 4, col: 'todo',       title: 'Implement drag and drop logic',          tag: 'feature', priority: 'high',   assignee: 'AM' },
  { id: 5, col: 'inprogress', title: 'Integrate REST API for task data',       tag: 'api',     priority: 'high',   assignee: 'SK' },
  { id: 6, col: 'inprogress', title: 'Add column counter badge',               tag: 'ui',      priority: 'low',    assignee: 'PD' },
  { id: 7, col: 'review',     title: 'Fix card overlap bug on mobile view',    tag: 'bug',     priority: 'high',   assignee: 'RK' },
  { id: 8, col: 'done',       title: 'Create project README file',             tag: 'task',    priority: 'low',    assignee: 'AM' },
  { id: 9, col: 'done',       title: 'Setup GitHub repository',                tag: 'task',    priority: 'medium', assignee: 'PD' },
]

// ===== AVATAR COLORS =====
// Map initials to a background color for avatar circles
export const AVATAR_COLORS = {
  SK: '#185FA5',
  RK: '#854F0B',
  AM: '#534AB7',
  PD: '#3B6D11',
}
