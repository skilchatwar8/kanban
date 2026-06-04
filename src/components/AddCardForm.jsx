import { useState } from 'react'
import { TAGS, PRIORITIES } from '../data.js'
import styles from './AddCardForm.module.css'

// =============================================
// ADD CARD FORM COMPONENT
// =============================================
// A form that lets users type a new card title,
// pick a tag and priority, then submit.
//
// Concepts used here:
//  - useState: to control form open/close and input values
//  - Controlled inputs: input value tied to state (value + onChange)
//  - Form submission: validation before calling parent handler
//  - Lifting state up: calls onAddCard from parent (Column → App)
// =============================================

function AddCardForm({ columnId, onAddCard }) {
  // isOpen controls whether the form is shown or hidden
  const [isOpen, setIsOpen]     = useState(false)

  // Controlled input states — React controls the input values
  const [title, setTitle]       = useState('')
  const [tag, setTag]           = useState('task')
  const [priority, setPriority] = useState('medium')

  // ---- OPEN the form ----
  const handleOpen = () => setIsOpen(true)

  // ---- CANCEL: close form and reset all fields ----
  const handleCancel = () => {
    setIsOpen(false)
    setTitle('')
    setTag('task')
    setPriority('medium')
  }

  // ---- SUBMIT: validate and send data to parent ----
  const handleSubmit = () => {
    // Don't submit if title is empty
    if (!title.trim()) return

    // Call the handler from App.jsx with the form values
    onAddCard(columnId, title.trim(), tag, priority)

    // Reset and close the form
    handleCancel()
  }

  // Allow submitting with Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit()
    if (e.key === 'Escape') handleCancel()
  }

  return (
    <div className={styles.wrapper}>
      {/* ---- Toggle Button (shown when form is closed) ---- */}
      {!isOpen && (
        <button className={styles.addBtn} onClick={handleOpen}>
          + Add card
        </button>
      )}

      {/* ---- Form (shown when isOpen is true) ---- */}
      {isOpen && (
        <div className={styles.form}>
          {/* Title input — controlled component */}
          <input
            className={styles.input}
            type="text"
            placeholder="Enter card title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            maxLength={80}
          />

          {/* Tag and Priority selects on the same row */}
          <div className={styles.row}>
            {/* Tag selector */}
            <select
              className={styles.select}
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            >
              {TAGS.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            {/* Priority selector */}
            <select
              className={styles.select}
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              {PRIORITIES.map(p => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
          </div>

          {/* Action buttons */}
          <div className={styles.actions}>
            <button className={styles.submitBtn} onClick={handleSubmit}>
              Add Card
            </button>
            <button className={styles.cancelBtn} onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddCardForm
