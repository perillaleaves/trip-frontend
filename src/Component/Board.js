import { useState } from "react";
import "../App.css";
const Board = () => {
  const [inputValue, setInputValue] = useState({
    title: "",
    content: "",
  });

  function onChange(e) {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    console.log(inputValue);
  }
  return (
    <>
      <div className="board-wrapper">
        <div className="board">
          <div>
            <span>제목 :</span>
            <input
              className="board-title-input"
              name="title"
              onChange={onChange}
            />
          </div>
          <div>
            <span>본문 :</span>
            <input
              className="board-content-input"
              name="content"
              onChange={onChange}
            ></input>
          </div>
          <button>저장</button>
        </div>
      </div>
    </>
  );
};

export default Board;
