import React, { useState, useEffect } from 'react'
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg'
import { useParams,useNavigate } from 'react-router-dom'
import styles from './NotePage.module.css';
import customFetch from '../../utils/index'

const NotePage = ({  }) => {
    let params = useParams();
    let navigate = useNavigate();
    let noteId = params.id
    let [note, setNote] = useState(null)
    const isNewNote = noteId === 'new'

    useEffect(() => {
        getNote()
    }, [noteId])


    let getNote = async () => {
        if (noteId === 'new') return

        let response = await customFetch(`/api/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }

    let createNote = async () => {
        customFetch(`/api/notes/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let handleSubmit = () => {
         if (isNewNote && note && note.body !== null) {
            createNote()
        }
        navigate('/')
    }

    let handleChange = (value) => {
        setNote(note => ({ ...note, 'body': value }))
    }

    return (
        <div className={styles.note} >
            <div className={styles.noteHeader}>
                <h3>
                    <ArrowLeft onClick={handleSubmit} />
                </h3>
                {isNewNote && <button onClick={handleSubmit}>Save</button>}
            </div>
            <textarea readOnly={!isNewNote} onChange={(e) => {handleChange(e.target.value) }} value={note?.body}></textarea>
        </div>
    )
}

export default NotePage
