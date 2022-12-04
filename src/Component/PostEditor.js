import { useState } from "react";
import "../App.css";
const PostEditor = () => {
  const [inputValue, setInputValue] = useState({
    title: "",
    content: "",
  });

  function onChange(e) {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  }

  function onClick() {
    console.log(inputValue);
  }
  return (
    <>
      <div className="post-editor-wrapper">
        <div className="post-editor">
          <div>
            <span>제목 :</span>
            <input
              className="post-editor-title-input"
              name="title"
              onChange={onChange}
            />
          </div>
          <div>
            <span>본문 :</span>
            <input
              className="post-editor-content-input"
              name="content"
              onChange={onChange}
            ></input>
          </div>
          <button onClick={onClick}>저장</button>
        </div>
      </div>
    </>
  );
};

export default PostEditor;
