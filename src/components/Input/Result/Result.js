import { useRef,useState } from "react";
import Input from "../Input";
import { generateTargetNumber } from "../../../utils/generateTargetNumber";
import styles from "./Result.module.css";

const Result = () => {

    const [results, setResults] = useState([]);

    let target = useRef(generateTargetNumber(8));

    return (
        <span className={styles.wrapper}>
            <Input
                results={results}
                setResults={setResults}
                target={target.current}
            />
            <div className={styles.resultsWrapper}>
                {results ? 
                    results.map((result) => (
                        <div className={styles.resultItem}>
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