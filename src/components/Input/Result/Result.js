import { useEffect, useRef, useState } from "react";
import Input from "../Input";
import { generateTargetNumber } from "../../../utils/generateTargetNumber";
import styles from "./Result.module.css";

const Result = () => {

    const [results, setResults] = useState([]);
    const [lockAnim, setLockAnim] = useState('none');
    const [target, setTarget] = useState();

    const lockRef = useRef(null);

    useEffect(() => {
        if (lockAnim === 'correct' || lockAnim === 'none') {
            setTarget(generateTargetNumber(8));
        } 
        if (lockAnim === 'correct') {
            setTimeout(() => {
                setLockAnim('none');
            }, 5000);
        }
    },[lockAnim]);

    return (
        <span className={styles.wrapper}>
            <div className={styles.lockContainer}>
                <div className={lockAnim === 'correct' ? styles.open : styles.lock} ref={lockRef}>
                    <div className={styles.keyhole}></div>
                </div>
            </div>
            <Input
                results={results}
                setResults={setResults}
                target={target}
                lockAnim={lockAnim}
                setLockAnim={setLockAnim}
                lockRef={lockRef}
            />
            <div className={styles.resultsWrapper}>
                {results ? 
                    results.map((result, resultsIndex) => (
                        <div className={styles.resultItem} key={resultsIndex}>
                            <div className={styles.resultNumbers}>
                                {result.map((val,idx) =>
                                    <span 
                                        key={idx}
                                        className={styles.number}
                                    >
                                        {val[1]}
                                    </span>
                                )}
                            </div>
                            <div className={styles.resultLights}>
                                {result.map((val,idx) =>
                                    <span 
                                        key={idx}
                                        className={
                                            val[0] === 1 ? 
                                            styles.green :
                                            val[0] === 0 ?
                                            styles.yellow :
                                            styles.red
                                        }
                                    >
                                    </span>
                                )}
                            </div>
                        </div>
                    ))
                    :
                    <div>Nothing here yet...</div>
                }
            </div>
            
        </span>
    )
};

export default Result;