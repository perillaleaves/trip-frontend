import "./Post.css";
import PostDetail from "./PostDetail";

const Post = ({ post }) => {
  return (
    <>
      <div className="post" onClick={<PostDetail post={post} />}>
        <div>{post.id}</div>
        <div>{post.title}</div>
        <div>{post.author}</div>
        <div>{post.created_date}</div>
      </div>
    </>
  );
};

export default Post;
