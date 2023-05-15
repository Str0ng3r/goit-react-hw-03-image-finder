import styles from './styles.module.css'
export const ButtonLoad = ({funcLoad}) => {
    return(
        <button className={styles.Button} onClick={funcLoad}>Load More</button>
    )
}