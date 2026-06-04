import styles from './Card.module.css'
import { AVATAR_COLORS } from '../data.js'

// =============================================
// CARD COMPONENT
// =============================================
// Renders a single task card with:
//  - Title
//  - Tag badge (feature / bug / task / ui / api)
//  - Priority indicator (🔴 🟡 🟢)
//  - Assignee avatar
//  - Delete button
//  - Draggable: stores card ID in dataTransfer for drop handling
//
// Concepts used here:
//  - Props: receives card data and onDelete handler
//  - onDragStart: HTML5 drag event — stores cardId for the drop target
//  - Conditional styling: different colors per tag
// =============================================

// Map tag names to CSS class names for color coding
const TAG_STYLES = {
  feature: styles.tagFeature,
  bug:     styles.tagBug,
  task:    styles.tagTask,
  ui:      styles.tagUi,
  api:     styles.tagApi,
}

// Map priority values to emoji icons
const PRIORITY_ICONS = {
  high:   '🔴',
  medium: '🟡',
  low:    '🟢',
}

function Card({ card, onDelete }) {
  // ---- DRAG START: store card ID so the drop target knows which card moved ----
  const handleDragStart = (e) => {
    // dataTransfer is a built-in drag-and-drop API
    // We store the card's ID as a string (dataTransfer only supports strings)
    e.dataTransfer.setData('cardId', card.id.toString())
    e.dataTransfer.effectAllowed = 'move'
  }

  const avatarColor = AVATAR_COLORS[card.assignee] || '#888'

  return (
    <div
      className={styles.card}
      draggable={true}           // makes this element draggable
      onDragStart={handleDragStart}
    >
      {/* ---- Delete Button ---- */}
      <button
        className={styles.deleteBtn}
        onClick={() => onDelete(card.id)}
        title="Delete card"
        aria-label="Delete card"
      >
        ✕
      </button>

      {/* ---- Card Title ---- */}
      <p className={styles.title}>{card.title}</p>

      {/* ---- Card Footer: tag + priority + avatar ---- */}
      <div className={styles.footer}>
        {/* Tag badge */}
        <span className={`${styles.tag} ${TAG_STYLES[card.tag] || styles.tagTask}`}>
          {card.tag}
        </span>

        <div className={styles.footerRight}>
          {/* Priority emoji */}
          <span
            className={styles.priority}
            title={`Priority: ${card.priority}`}
          >
            {PRIORITY_ICONS[card.priority]}
          </span>

          {/* Assignee avatar circle */}
          <div
            className={styles.avatar}
            style={{ backgroundColor: avatarColor }}
            title={`Assignee: ${card.assignee}`}
          >
            {card.assignee}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
