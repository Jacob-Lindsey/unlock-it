import styles from  "./LockIcon.module.css";

const LockIcon = (props) => {

    const lockAnim = props.lockAnim;
    const lockRef = props.lockRef;

    return (
        <div className={styles.lockContainer}>
            <div className={lockAnim === 'correct' ? styles.open : styles.lock} ref={lockRef}>
                <div className={styles.keyhole}></div>
            </div>
        </div>
    )

};

export default LockIcon;