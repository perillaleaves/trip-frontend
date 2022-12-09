import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./PostNew.css";
import { postSave } from "../module/reducer";
import Navigator from "./Navigator";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
const PostNew = () => {
  // global state
  const dispatch = useDispatch();
  const { selectRowData } = useSelector((state) => state.postReducer);

  // local state
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    postId: "",
    postTitle: "",
    postContent: "",
    postCreated_date: new Date(),
  });

  //local function
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
    navigate("/");
  };

  return (
    <>
      <Navigator />
      <div className="main-background">
        <Header />
        <div className="main-gap"></div>
        <div className="main">
          <div className="post-new-wrapper">
            <div className="post-new">
              <div>
                <span>제목 :</span>
                <input
                  className="post-new-title-input"
                  name="postTitle"
                  onChange={onChange}
                  value={inputValue.postTitle}
                />
              </div>
              <div>
                <span>본문 :</span>
                <input
                  className="post-new-content-input"
                  name="postContent"
                  onChange={onChange}
                  value={inputValue.postContent}
                ></input>
              </div>
              <button onClick={saveBtnClick}>저장</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostNew;
