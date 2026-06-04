import { useState } from 'react'
import Card from './Card.jsx'
import AddCardForm from './AddCardForm.jsx'
import styles from './Column.module.css'

// =============================================
// COLUMN COMPONENT
// =============================================
// Renders a single Kanban column with:
//  - A header (title + card count)
//  - A list of Card components
//  - An AddCardForm to create new cards
//  - Drag & Drop: accepts dropped cards from other columns
//
// Concepts used here:
//  - useState: to track if a card is being dragged over this column
//  - onDragOver / onDrop: HTML5 drag and drop events
//  - Conditional className: applying styles dynamically
// =============================================

function Column({ column, cards, onAddCard, onDeleteCard, onMoveCard }) {
  // isDragOver tracks whether a card is currently being dragged over this column
  // We use it to show a visual highlight effect
  const [isDragOver, setIsDragOver] = useState(false)

  // ---- DRAG OVER: fires repeatedly while dragging over this column ----
  const handleDragOver = (e) => {
    e.preventDefault() // REQUIRED: without this, drop won't fire
    setIsDragOver(true)
  }

  // ---- DRAG LEAVE: fires when the dragged item leaves this column ----
  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  // ---- DROP: fires when the card is released onto this column ----
  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)
    // Retrieve the card ID we stored in dragstart (inside Card.jsx)
    const cardId = parseInt(e.dataTransfer.getData('cardId'))
    // Tell App to move this card to this column
    onMoveCard(cardId, column.id)
  }

  return (
    <div
      className={`${styles.column} ${isDragOver ? styles.dragOver : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* ---- Column Header ---- */}
      <div className={styles.header}>
        <div className={styles.titleRow}>
          {/* Colored dot indicator */}
          <span
            className={styles.dot}
            style={{ backgroundColor: column.color }}
          />
          <span className={styles.label}>{column.label}</span>
        </div>
        {/* Card count badge */}
        <span className={styles.count}>{cards.length}</span>
      </div>

      {/* ---- Cards List ---- */}
      <div className={styles.cardList}>
        {cards.length === 0 && (
          <p className={styles.emptyText}>No cards yet</p>
        )}
        {/* Render a Card for each card in this column */}
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            onDelete={onDeleteCard}
          />
        ))}
      </div>

      {/* ---- Add Card Form ---- */}
      <AddCardForm
        columnId={column.id}
        onAddCard={onAddCard}
      />
    </div>
  )
}

export default Column
