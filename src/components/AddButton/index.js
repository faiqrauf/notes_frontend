import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AddIcon } from '../../assets/add.svg'
import styles from './AddButton.module.css';


const AddButton = () => {
    return (
        <Link to="/note/new" className={styles.floatingButton}>
            <AddIcon />
        </Link>
    )
}

export default AddButton
