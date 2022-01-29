import styles from './index.module.scss'

function NoteDiv({note}){
    return (
        <div className={styles.NotesContainer}>
            <p>{note}</p>
        </div>
    )
}

export default NoteDiv