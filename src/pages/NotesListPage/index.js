import React, { useState, useEffect } from 'react'
import ListItem from '../../components/ListItem'
import AddButton from '../../components/AddButton'
import styles from './NotesListPage.module.css';
import customFetch from '../../utils/index'


const NotesListPage = () => {
    const [notes, setNotes] = useState([])

    const getNotes = async () => {
        let response = await customFetch('/api/notes/')
        let data = await response.json()
        setNotes(data)
    }

    useEffect(() => {
        getNotes()
    }, [])

    return (
        <div className="notes">
            <div className={styles.notesHeader}>
                <h2 className={styles.notesTitle}>&#9782; Notes</h2>
                <p className={styles.notesCount}>{notes.length}</p>
            </div>
            <div className={styles.notesList}>
                {notes.map((note, index) => (
                    <ListItem key={index} note={note} />
                ))}
            </div>
            <AddButton />
        </div>
    )
}

export default NotesListPage
