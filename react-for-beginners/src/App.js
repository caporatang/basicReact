import { useState, useEffect } from "react";


function Hello() {
    //component가 destroyed될때 보내주는 함수
    // cleanUp fucntion이라고 한다.
    function byFn() { 
        console.log("bye :)");
    }

    function hiFn () {
        console.log("created :)");
        return byFn;        
    }
    useEffect(hiFn, []);
    // useEffect(() => {
    //     console.log("created :)")
    //     //component가 destroyed될때 보내주는 함수
    //     // cleanUp fucntion이라고 한다.
    //     return () => console.log("destroyed :(");
    // },[])
     return <h1>Hello</h1>
}

function App() {
    
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev)
//showin
  return (
   <div>
    {/* showing이 트루이면 컴포넌트 반환, false이면 null을 반환한다. */}
    {showing ? <Hello /> : null}
    
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
