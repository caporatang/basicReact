import React, { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./Button.module.css";
function Practice() {
    const [counter, setCounter] = useState(0);
    const onClick = () => setCounter((prev) => prev + 1);
    const [text, setText] = useState(" ");
    
    useEffect(() => {
        console.log("i run only once");
    }, []);

    useEffect(() => {
        console.log("im modi counter ~");
    }, [counter])

  return (
    <div>
        <h1>Counter : {counter}</h1>
        <button onClick={onClick}>Click me~</button>

        <h2>Test</h2>
        <button className={styles.btn}>나는 모듈화된 버튼이예요</button>
        <Button text="나는바보" fontSize= {30} />
    </div>
  );
}
export default Practice;
