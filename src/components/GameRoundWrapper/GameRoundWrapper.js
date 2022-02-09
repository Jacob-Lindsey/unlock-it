import styles from "./GameRoundWrapper.module.css";

const GameRoundWrapper = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
};

export default GameRoundWrapper;