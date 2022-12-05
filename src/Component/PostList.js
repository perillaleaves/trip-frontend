import Post from "./Post";
import "./PostList.css";
const PostList = ({ dummyList }) => {
  return (
    <>
      <div className="postlist-wrapper">
        <div className="postlist">
          <span>id</span>
          <span>title</span>
          <span>author</span>
          <span>time</span>
        </div>
        <div>
          {dummyList.map((post) => (
            <Post
              post={post}
              key={post.id}
              // onClick={<PostDetail post={post} />}
              onClick={() => alert("hi")}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PostList;
