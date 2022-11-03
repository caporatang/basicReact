// import { useState, useEffect } from "react";

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   // prev는 이전의 counter의 값을 가져와 +1 해준다
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);

//   //useEffect는 최초 렌더될때 한번만 실행 시켜줌
//   useEffect(() => {
//     console.log("I run only once");
//     //빈 배열인경우 -> 조건이 없으니 최초 렌더때만 실행되는것. 
//   }, []);
  
//   useEffect(() => {
//         console.log("I run when 'keyword' changes.")
//     //keyword가 변화되었을때만 실행
//   }, [keyword]);

//   useEffect(() => {
//         console.log("I run when 'counter' changes.")
//     //counter가 변화되었을때만 실행
//   }, [counter]);
//   useEffect(() => {
//     console.log("I run when keyword & counter change");
//   }, [keyword, counter])
//   return (
//    <div>
//     <input 
//       value={keyword}
//       onChange={onChange}
//       type="text"
//       placeholder="Search here..."
//     />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>Click me</button>        
//     </div>
//   );
// }

// export default App;
