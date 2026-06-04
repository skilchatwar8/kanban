import { useState } from 'react'
import Board from './components/Board.jsx'
import { INITIAL_CARDS, COLUMNS } from './data.js'
import styles from './App.module.css'

// =============================================
// APP COMPONENT
// =============================================
// This is the ROOT component of the entire app.
// It owns the CARDS state and passes it down to child components.
//
// Concepts used here:
//  - useState: to store and update the list of cards
//  - Props: passing state + handler functions down to Board
//  - Lifting state up: App holds the data, children just display it
// =============================================

function App() {
  // useState returns [currentValue, setterFunction]
  // cards = array of card objects
  // setCards = function to update cards (triggers re-render)
  const [cards, setCards] = useState(INITIAL_CARDS)

  // nextId is used to generate unique IDs for new cards
  const [nextId, setNextId] = useState(INITIAL_CARDS.length + 1)

  // ---- HANDLER: Add a new card to a column ----
  // Called from AddCardForm inside a Column
  const handleAddCard = (colId, title, tag, priority) => {
    const newCard = {
      id: nextId,
      col: colId,
      title,
      tag,
      priority,
      assignee: 'SK', // default assignee
    }
    // spread operator (...cards) copies all existing cards,
    // then we append the new card at the end
    setCards([...cards, newCard])
    setNextId(nextId + 1)
  }

  // ---- HANDLER: Delete a card by its ID ----
  // filter() returns a new array excluding the deleted card
  const handleDeleteCard = (cardId) => {
    setCards(cards.filter(card => card.id !== cardId))
  }

  // ---- HANDLER: Move a card to a different column ----
  // Called when user drops a card onto a column
  // map() creates a new array — we find the dragged card and update its col
  const handleMoveCard = (cardId, newColId) => {
    setCards(cards.map(card =>
      card.id === cardId ? { ...card, col: newColId } : card
    ))
  }

  return (
    <div className={styles.app}>
      {/* App Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            <span className={styles.logo}>📋</span>
            <div>
              <h1 className={styles.title}>Kanban Board</h1>
              <p className={styles.subtitle}>Sprint 1 — Frontend ReactJS Project</p>
            </div>
          </div>
          <div className={styles.headerRight}>
            <span className={styles.totalBadge}>{cards.length} total cards</span>
          </div>
        </div>
      </header>

      {/* Board — receives cards, columns, and all handlers as props */}
      <main className={styles.main}>
        <Board
          cards={cards}
          columns={COLUMNS}
          onAddCard={handleAddCard}
          onDeleteCard={handleDeleteCard}
          onMoveCard={handleMoveCard}
        />
      </main>
    </div>
  )
}

export default App
