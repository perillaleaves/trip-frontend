const PostList = ({ dummyList }) => {
  return (
    <>
      <div>
        {dummyList.map((it) => (
          <div>
            <div>id : {it.id}</div>
            <div>author : {it.author}</div>
            <div>content : {it.content}</div>
            <div>time : {it.created_date}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostList;
