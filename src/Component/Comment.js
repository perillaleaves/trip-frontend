import "./style.css";

const Comment = ({
  commentId,
  commentContent,
  commentAuthor,
  commentCreated_time,
}) => {
  return (
    <>
      <div className="comment-form-wrapper">
        <div className="comment-flex">
          <span className="comment-id">{commentId}</span>
          <div className="comment-form">
            <div className="comment-title">
              <span>{commentAuthor}</span>
              <span>{commentCreated_time}</span>
            </div>
            <div className="comment-content-wrapper">
              <span>{commentContent}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
