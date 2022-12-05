import Footer from "./Footer";
import Header from "./Header";
import Navigator from "./Navigator";
import PostList from "./PostList";
const dummyList = [
  {
    id: 1,
    author: "이지윤",
    title: "제목1",
    content: "hello 1",
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "이지윤",
    title: "제목2",
    content: "hello 2",
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "이지윤",
    title: "제목3",
    content: "hello 3",
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "이지윤",
    title: "제목4",
    content: "hello 4",
    created_date: new Date().getTime(),
  },
];

const Main = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex", height: "100%" }}>
        <Navigator />
        <PostList dummyList={dummyList} />
      </div>
      <Footer />
    </>
  );
};

export default Main;
