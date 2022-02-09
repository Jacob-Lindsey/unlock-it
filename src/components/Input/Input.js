import { useEffect, useState } from "react";
import { evaluateUserInput } from "../../utils/evaluateUserInput";
import styles from "./Input.module.css";

const Input = (props) => {

    const [numbers, setNumbers] = useState([null,null,null,null,null,null,null,null]);
    const results = props.results;
    const setResults = props.setResults;
    const target = props.target;

    useEffect(() => {
        window.addEventListener('keydown', handleSubmit);
        return () => {
            window.removeEventListener('keydown', handleSubmit);
        }
    });

    const handleKeyPress = (e) => {
        if ( !( 
            (e.which >= 48 && e.which <= 57)
                || (e.which >= 96 && e.which <= 105) 
                || (e.which === 8 || e.which === 9)
                || (e.which >= 37 && e.which <= 40)
                || (e.which === 46 || e.which === 116)
        )) { e.preventDefault() };
    };

    const handleChangeFocus = (e) => {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");
        
        let fieldIntIndex = parseInt(fieldIndex, 10);

        if (value.length >= maxLength) {
            
            const newNumbers = [ ...numbers ];
            newNumbers[fieldIntIndex-1] = parseInt(value);
            setNumbers(newNumbers);

            if (fieldIntIndex < 8) {
                const nextField = document.querySelector(`input[name=input-${fieldIntIndex + 1}]`);
                if (nextField !== null) {
                    nextField.focus();
                }
            } else if (fieldIntIndex === 8) {
                const nextField = document.querySelector("input[name=input-1]");
                nextField.focus();
            }
        }
    };

    const handleSubmit = (e) => {
        if (e.which === 13) {
            if (!numbers.includes(null)) {
                const result = evaluateUserInput(numbers,target);
                const newResults = [...results]
                newResults.push(result);
                document.querySelectorAll("[name^='input']").forEach(x => x.value = '');
                const nextField = document.querySelector("input[name=input-1]");
                nextField.focus();
                setResults(newResults);
            }
        }
    };

    return (
        <div className={styles.wrapper}>
            <input className={styles.input}
                autoFocus
                maxLength="1"
                name='input-1'
                onKeyDown={(e) => handleKeyPress(e)}
                onInput={(e) => handleChangeFocus(e)}
                onFocus={(e) => e.target.select()}
                required
            />
            <input className={styles.input}
                maxLength="1"
                name='input-2'
                onKeyDown={(e) => handleKeyPress(e)}
                onInput={(e) => handleChangeFocus(e)}
                onFocus={(e) => e.target.select()}
                required
            />
            <input className={styles.input}
                maxLength="1"
                name='input-3'
                onKeyDown={(e) => handleKeyPress(e)}
                onInput={(e) => handleChangeFocus(e)}
                onFocus={(e) => e.target.select()}
                required
            />
            <input className={styles.input}
                maxLength="1"
                name='input-4'
                onKeyDown={(e) => handleKeyPress(e)}
                onInput={(e) => handleChangeFocus(e)}
                onFocus={(e) => e.target.select()}
                required
            />
            <input className={styles.input}
                maxLength="1"
                name='input-5'
                onKeyDown={(e) => handleKeyPress(e)}
                onInput={(e) => handleChangeFocus(e)}
                onFocus={(e) => e.target.select()}
                required
            />
            <input className={styles.input}
                maxLength="1"
                name='input-6'
                onKeyDown={(e) => handleKeyPress(e)}
                onInput={(e) => handleChangeFocus(e)}
                onFocus={(e) => e.target.select()}
                required
            />
            <input className={styles.input}
                maxLength="1"
                name='input-7'
                onKeyDown={(e) => handleKeyPress(e)}
                onInput={(e) => handleChangeFocus(e)}
                onFocus={(e) => e.target.select()}
                required
            />
            <input className={styles.input}
                maxLength="1"
                name='input-8'
                onKeyDown={(e) => handleKeyPress(e)}
                onInput={(e) => handleChangeFocus(e)}
                onFocus={(e) => e.target.select()}
                required
            />
        </div>
    )

};

export default Input;