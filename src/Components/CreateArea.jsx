import React, { useState } from "react"

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false)

  const [note, setNote] = useState({
    title: "",
    content: "",
  })

  function handChange(event) {
    const { name, value } = event.target

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      }
    })
  }
  function submitNote(event) {
    event.preventDefault()
    props.onAdd(note)
    setNote({
      title: "",
      content: "",
    })
  }

  function expand() {
    setIsExpanded(true)
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            type="text"
            onChange={handChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          rows={isExpanded ? 3 : 1}
          onClick={expand}
          onChange={handChange}
          value={note.content}
          placeholder="Take a note..."
        />
        <button onClick={submitNote} className="material-symbols-outlined">
          add_circle
        </button>
      </form>
    </div>
  )
}

export default CreateArea
