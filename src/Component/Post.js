import "./Post.css";

const Post = ({ postId, postTitle, postCreated_date, onRowClick }) => {
  return (
    <>
      <tr>
        <td onClick={() => onRowClick(postId)}>{postId}</td>
        <td onClick={() => onRowClick(postId)}>{postTitle}</td>
        <td onClick={() => onRowClick(postId)}>작성장</td>
        <td onClick={() => onRowClick(postId)}>
          {new Date(postCreated_date).toLocaleString()}
        </td>
      </tr>
    </>
  );
};

export default Post;
