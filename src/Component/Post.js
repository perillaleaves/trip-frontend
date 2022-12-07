import "./Post.css";

const Post = ({ postId, postTitle, postAuthor, postCreated_date }) => {
  return (
    <>
      <tr>
        <td>{postId}</td>
        <td>{postTitle}</td>
        <td>{postAuthor}</td>
        <td>{postCreated_date}</td>
      </tr>
    </>
  );
};

export default Post;
