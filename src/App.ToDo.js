import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  // input값을 어떻게 컨트롤 할 수 있을까? -> useState 먼저
  const [toDo, setTodo] = useState("");
  // input값을 받을 array 생성
  const [toDos, setToDos] = useState([]);
  // onChange가 일어날때 setTodo의 value를 가져옴
  const onChange = (event) => setTodo(event.target.value);
  //form Submit
  const onSubmit = (event) => {
    // submit인 경우 form 데이터를 서버에 전송하고, 페이지를 새로 고침하는 걸 막기위해
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // 직전의 값을 받아 array를 만듦
    setToDos((currentArray) => [toDo, ...currentArray]);
    //빈값으로 만듦
    setTodo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write ypur to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
