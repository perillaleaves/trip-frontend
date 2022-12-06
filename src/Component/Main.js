import { useRef, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navigator from "./Navigator";
import PostList from "./PostList";

const Main = () => {
  const [data, setData] = useState([]);
  const dataId = useRef();
  const onCreate = (author, title, content) => {
    const created_date = new Date().getTime();
    const newPost = {
      author,
      title,
      content,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([...data, newPost]);
  };
  return (
    <>
      <Header />
      <div style={{ display: "flex", height: "100%" }}>
        <Navigator />
        <PostList dummyList={[]} />
      </div>
      <Footer />
    </>
  );
};

export default Main;
