import { useSelector } from "react-redux";

const PostDetail = () => {
  const { selectRowData } = useSelector((state) => state.postReducer);
  console.log(selectRowData);
  return (
    <>
      <div>{selectRowData.postId}</div>
      <div>{selectRowData.postAuthor}</div>
      <div>{selectRowData.postTitle}</div>
      <div>{selectRowData.postContent}</div>
      <div>{selectRowData.postCreated_date}</div>
      <div>hi</div>
    </>
  );
};

export default PostDetail;
