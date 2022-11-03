import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1)
  console.log("i run all the time");

  //useEffect는 최초 렌더될때 한번만 실행 시켜줌
  useEffect(() => {
    console.log("CALL THE API.");
  }, []);
  return (
   <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>        
    </div>
  );
}

export default App;
