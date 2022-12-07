import Footer from "./Footer";
import Header from "./Header";
import Navigator from "./Navigator";
import PostList from "./PostList";
import { useDispatch, useSelector } from "react-redux";
import { postRemove, postSave } from "../module/reducer";

const Main = () => {
  const { posts } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  const onRemove = (postId) => dispatch(postRemove(postId));
  const onSave = (saveData) => dispatch(postSave(saveData));
  function save() {
    dispatch({ type: "SAVE" });
  }
  return (
    <>
      <Header />
      <div style={{ display: "flex", height: "100%" }}>
        <Navigator />
        {console.log(posts)}
        {posts.map((post) => (
          <PostList
            key={post.id}
            postId={post.id}
            posttitle={post.title}
            postContent={post.content}
            postCreated_date={post.created_date}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Main;
