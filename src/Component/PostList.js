import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Post from "./Post";
import "./PostList.css";

const PostList = ({ onRowClick, onRemove, onUpdate }) => {
  // global state
  const { posts } = useSelector((state) => state.postReducer);
  const navigate = useNavigate();

  return (
    <div className="post-wrapper">
      <div className="post">
        <button onClick={() => navigate("/posteditor")}>새 글 쓰기</button>

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
                key={post.postId}
                postId={post.postId}
                postTitle={post.postTitle}
                postAuthor={post.postAuthor}
                postCreated_date={post.postCreated_date}
                onRowClick={onRowClick}
                onRemove={onRemove}
                onUpdate={onUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostList;
