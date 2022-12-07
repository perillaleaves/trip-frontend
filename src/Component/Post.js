import "./Post.css";

const Post = ({
  postId,
  postTitle,
  postAuthor,
  postCreated_date,
  onRowClick,
}) => {
  return (
    <>
      <tr>
        <td onClick={() => onRowClick(postId)}>{postId}</td>
        <td onClick={() => onRowClick(postId)}>{postTitle}</td>
        <td onClick={() => onRowClick(postId)}>{postAuthor}</td>
        <td onClick={() => onRowClick(postId)}>{postCreated_date}</td>
      </tr>
    </>
  );
};

export default Post;
