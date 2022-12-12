import "./Post.css";

const Post = ({
  postId,
  postTitle,
  postAuthor,
  postCreated_date,
  onRowClick,
  onRemove,
  onUpdate,
}) => {
  return (
    <>
      <tr>
        <td onClick={() => onRowClick(postId)}>{postId}</td>
        <td onClick={() => onRowClick(postId)}>{postTitle}</td>
        <td onClick={() => onRowClick(postId)}>작성장</td>
        <td onClick={() => onRowClick(postId)}>
          {new Date(postCreated_date).toLocaleString()}
        </td>
        <td>
          <button onClick={() => onUpdate(postId)}>수정하기</button>
          <button onClick={() => onRemove(postId)}>삭제하기</button>
        </td>
      </tr>
    </>
  );
};

export default Post;
