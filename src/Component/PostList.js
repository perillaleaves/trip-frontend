import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API/Api";
import Post from "./Post";
import "./PostList.css";

const PostList = ({ onRowClick }) => {
  // global state
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState({
    firstPage: 1,
    currentPage: 1,
    lastPage: 1,
  });
  useEffect(() => {
    API.getposts().then((data) => {
      let resp = data.data.data;
      setPosts(resp);
      console.log(data);
      setPage({
        lastPage: data.data.lastPage,
      });
    });
  }, []);

  // function
  const pageRendering = () => {
    for (let i = 0; i < page.lastPage; i++) {
      return console.log(i);
    }
  };
  const onPageClick = () => {};
  return (
    <div className="post-wrapper">
      <div className="post">
        <button onClick={() => navigate("/posts/create")}>새 글 쓰기</button>

        <table border={1} className="post-table">
          <tbody>
            <tr>
              <td className="post-table-id">id</td>
              <td className="post-table-title">title</td>
              <td className="post-table-author">author</td>
              <td className="post-table-time">time</td>
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
        <div className="page-number-form-wrapper">
          <span className="page-number-form">{pageRendering()}</span>
        </div>
      </div>
    </div>
  );
};

export default PostList;
