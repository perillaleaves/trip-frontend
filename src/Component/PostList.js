import { useSelector } from "react-redux";
import Post from "./Post";
import "./PostList.css";

const PostList = () => {
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
              key={post.id}
              postId={post.id}
              postTitle={post.title}
              postAuthor={post.author}
              postCreated_date={post.created_date}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
