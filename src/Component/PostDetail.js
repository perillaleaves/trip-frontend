import { useSelector } from "react-redux";
import CommentList from "./CommentList";
import Footer from "./Footer";
import Header from "./Header";
import Navigator from "./Navigator";
import "./PostDetail.css";

const PostDetail = () => {
  // global state
  const { selectRowData } = useSelector((state) => state.postReducer);

  return (
    <>
      <Header />
      <div style={{ display: "flex", height: "100%" }}>
        <Navigator />
        <div className="post-detail-form">
          <div className="post-detail-wrapper">
            <div>작성자 : {selectRowData.postAuthor}</div>
            <div>제목 : {selectRowData.postTitle}</div>
            <div>
              작성일 :{" "}
              {new Date(selectRowData.postCreated_date).toLocaleString()}
            </div>
            <div>내용 :</div>
            <span>{selectRowData.postContent}</span>
          </div>
        </div>
      </div>
      <div>
        <CommentList />
      </div>
      <Footer />
    </>
  );
};

export default PostDetail;
