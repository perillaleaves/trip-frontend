import { useSelector } from "react-redux";
import Post from "./Post";
import "./PostList.css";

const PostList = ({ onRowClick }) => {
  const { posts } = useSelector((state) => state.postReducer);

  return (
    <div className="post-wrapper">
      <table border={1}>
        <tbody>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>author</td>
            <td>time</td>
          </tr>
          {posts.map((post) => (
            <Post
              key={post.postId}
              postId={post.postId}
              postTitle={post.postTitle}
              postAuthor={post.postAuthor}
              postCreated_date={post.postCreated_date}
              onRowClick={onRowClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
