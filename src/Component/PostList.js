import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../API/Api";
import Post from "./Post";
import "./PostList.css";

const PostList = ({ onRowClick, onRemove, onUpdate }) => {
  // global state
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    API.getposts().then((data) => {
      let resp = data.data.data;
      setPosts(resp);
      console.log(resp);
    });
  }, []);
  return (
    <div className="post-wrapper">
      <div className="post">
        <button onClick={() => navigate("/postnew")}>새 글 쓰기</button>

        <table border={1} className="post-table">
          <tbody>
            <tr>
              <td>id</td>
              <td>title</td>
              <td>author</td>
              <td>time</td>
              <td>수정, 삭제</td>
            </tr>
            {posts.map((post) => (
              <Post
                key={post.id}
                postId={post.id}
                postTitle={post.title}
                postAuthor={post.content}
                postCreated_date={post.createdAt}
                onRowClick={onRowClick}
                onRemove={onRemove}
                onUpdate={onUpdate}
              />
            ))}
          </tbody>
        </table>
        <div></div>
      </div>
    </div>
  );
};

export default PostList;
