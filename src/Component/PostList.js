import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API/Api";
import Post from "./Post";
import "./PostList.css";

const PostList = ({ onRowClick }) => {
  // global state
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    API.getposts().then((data) => {
      let resp = data.data.data;
      setPosts(resp);
      console.log(data);
    });
  }, []);
  return (
    <div className="post-wrapper">
      <div className="post">
        <button onClick={() => navigate("/posts/create")}>새 글 쓰기</button>

        <table border={1} className="post-table">
          <tbody>
            <tr>
              <td>id</td>
              <td>title</td>
              <td>author</td>
              <td>time</td>
            </tr>
            {posts.map((post) => (
              <Post
                key={post.id}
                postId={post.id}
                postTitle={post.title}
                postCreated_date={post.createdAt}
                onRowClick={onRowClick}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostList;
