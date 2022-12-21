import { useState } from "react";
import "./PostNew.css";
import Navigator from "./Navigator";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import API from "../API/Api";
const PostNew = () => {
  // hook
  const navigate = useNavigate();

  // local state
  const [postInput, setPostInput] = useState({
    postId: "",
    title: "",
    content: "",
    createdAt: "",
    updatedAt: new Date(),
    userDTO: {
      name: "",
      userId: "",
    },
    comments: [],
  });

  //local function
  const resetForm = () => {
    setPostInput({
      postId: "",
      title: "",
      content: "",
      createdAt: "",
      updatedAt: "",
      userDTO: {
        name: "",
        userId: "",
      },
      comments: [],
    });
  };

  const onChange = (e) => {
    setPostInput({
      ...postInput,
      [e.target.name]: e.target.value,
    });
  };

  const onSave = () => {
    API.creatpost(postInput.title, postInput.content, localStorage);
  };

  const saveBtnClick = (e) => {
    e.preventDefault();
    onSave();
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
                  name="title"
                  onChange={onChange}
                  value={postInput.title}
                />
              </div>
              <div>
                <span>본문 :</span>
                <input
                  className="post-new-content-input"
                  name="content"
                  onChange={onChange}
                  value={postInput.content}
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
