import { useState, useEffect } from 'react'
import Column from './Column.jsx'
import styles from './Board.module.css'

// =============================================
// BOARD COMPONENT
// =============================================
// Renders ALL columns side by side on desktop.
// On mobile (<640px), shows one column at a time
// with a tab switcher at the top.
//
// Concepts used here:
//  - Props destructuring
//  - Array .filter() and .map()
//  - useState: activeCol for mobile tab switching
//  - useEffect: detect screen size and adjust layout
// =============================================

function Board({ cards, columns, onAddCard, onDeleteCard, onMoveCard }) {
  // activeCol tracks which column is visible on mobile
  const [activeCol, setActiveCol] = useState(columns[0].id)

  // isMobile tracks if we are on a small screen
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640)

  // useEffect runs after render — here we listen for window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640)
    }
    window.addEventListener('resize', handleResize)
    // Cleanup: remove listener when component unmounts
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // On mobile, only show the active column
  const visibleColumns = isMobile
    ? columns.filter(col => col.id === activeCol)
    : columns

  return (
    <div>
      {/* ---- Mobile Tab Switcher (hidden on desktop) ---- */}
      <div className={styles.mobileTabs}>
        {columns.map(col => {
          const count = cards.filter(c => c.col === col.id).length
          return (
            <button
              key={col.id}
              className={`${styles.mobileTab} ${activeCol === col.id ? styles.active : ''}`}
              onClick={() => setActiveCol(col.id)}
            >
              <span
                className={styles.mobileTabDot}
                style={{ backgroundColor: activeCol === col.id ? '#fff' : col.color }}
              />
              {col.label}
              <span className={styles.mobileTabCount}>{count}</span>
            </button>
          )
        })}
      </div>

      {/* ---- Board: all columns on desktop, one on mobile ---- */}
      <div className={styles.board}>
        {visibleColumns.map(column => {
          const columnCards = cards.filter(card => card.col === column.id)
          return (
            <Column
              key={column.id}
              column={column}
              cards={columnCards}
              onAddCard={onAddCard}
              onDeleteCard={onDeleteCard}
              onMoveCard={onMoveCard}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Board
