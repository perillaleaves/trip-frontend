import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { postSave } from "../module/reducer";
const PostUpdate = () => {
  // global state
  const dispatch = useDispatch();
  const { selectRowData } = useSelector((state) => state.postReducer);
  // local state
  const [inputValue, setInputValue] = useState({
    postTitle: selectRowData.postTitle,
    postContent: selectRowData.postContent,
  });
  // local fucntion
  const resetForm = () => {
    setInputValue({
      postId: "",
      postTitle: "",
      postContent: "",
    });
  };

  const onChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const onSave = (saveData) => {
    dispatch(postSave(saveData));
    console.log(saveData);
  };

  const saveBtnClick = (e) => {
    e.preventDefault();
    onSave(inputValue);
    resetForm();
  };

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

export default PostUpdate;
