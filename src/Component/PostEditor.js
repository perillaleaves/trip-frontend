import { useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { postSave } from "../module/reducer";
const PostEditor = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    postId: "",
    postTitle: "",
    postContent: "",
  });

  function onChange(e) {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  }

  function onSave(saveData) {
    dispatch(postSave(saveData));
    console.log(saveData);
  }
  function saveBtnClick(e) {
    e.preventDefault();
    onSave(inputValue);
  }

  return (
    <>
      <div className="post-editor-wrapper">
        <div className="post-editor">
          <div>
            <span>제목 :</span>
            <input
              className="post-editor-title-input"
              name="postTitle"
              onChange={onChange}
              value={inputValue.postTitle}
            />
          </div>
          <div>
            <span>본문 :</span>
            <input
              className="post-editor-content-input"
              name="postContent"
              onChange={onChange}
              value={inputValue.postContent}
            ></input>
          </div>
          <button onClick={saveBtnClick}>저장</button>
        </div>
      </div>
    </>
  );
};

export default PostEditor;
