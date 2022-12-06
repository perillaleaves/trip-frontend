import "./Post.css";

const Post = ({ id, title, author, created_date }) => {
  return (
    <>
      <div className="post">
        <div>{id}</div>
        <div>{title}</div>
        <div>{author}</div>
        <div>{created_date}</div>
      </div>
    </>
  );
};

export default Post;
