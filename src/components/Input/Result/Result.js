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
            
        </span>
    )
};

export default Result;