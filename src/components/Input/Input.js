import { useEffect, useState } from "react";
import { generateTargetNumber } from "../../utils/generateTargetNumber";
import { evaluateUserInput } from "../../utils/evaluateUserInput";
import styles from "./Input.module.css";

const Input = (props) => {

    const [numbers, setNumbers] = useState([null,null,null,null,null,null,null,null]);
    const results = props.results;
    const setResults = props.setResults;
    let target = props.target;
    const setLockAnim = props.setLockAnim;
    const lockRef = props.lockRef;

    const wiggle = new KeyframeEffect(
        lockRef.current,
        [
            { transform: 'rotate(0)' },
            { transform: 'rotate(-5deg)', offset: 0.05 },
            { transform: 'rotate(5deg)', offset: 0.1 },
            { transform: 'rotate(-5deg)', offset: 0.15 },
            { transform: 'rotate(5deg)', offset: 0.2 },
            { transform: 'rotate(-5deg)', offset: 0.25 },
            { transform: 'rotate(5deg)', offset: 0.3 },
            { transform: 'rotate(-5deg)', offset: 0.35 },
            { transform: 'rotate(5deg)', offset: 0.4 },
            { transform: 'rotate(-5deg)', offset: 0.45 },
            { transform: 'rotate(5deg)', offset: 0.5 },
            { transform: 'rotate(-5deg)', offset: 0.55 },
            { transform: 'rotate(5deg)', offset: 0.6 },
            { transform: 'rotate(-5deg)', offset: 0.65 },
            { transform: 'rotate(5deg)', offset: 0.7 },
            { transform: 'rotate(-5deg)', offset: 0.75 },
            { transform: 'rotate(5deg)', offset: 0.8 },
            { transform: 'rotate(-5deg)', offset: 0.85 },
            { transform: 'rotate(5deg)', offset: 0.9 },
            { transform: 'rotate(-5deg)', offset: 0.95 },
            { transform: 'rotate(0)' }
        ],
        
        { duration: 750, direction: "alternate", easing: "linear" }
    );

    const wiggleAnim = new Animation(wiggle, document.timeline);


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
                const guessResult = evaluateUserInput(numbers,target);
                const [animStatus, result] = [guessResult[0], guessResult[1]];
                if (animStatus === 1) {
                    target = generateTargetNumber(8);
                    setLockAnim('correct');
                } else {
                    wiggleAnim.play(); 
                    setLockAnim('incorrect');
                }
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