import { useNavigate } from "react-router-dom";
import "./App.css";
import PostList from "./Component/PostList";

const dummyList = [
  {
    id: 1,
    author: "이지윤",
    content: "hello 1",
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "이지윤",
    content: "hello 2",
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "이지윤",
    content: "hello 3",
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "이지윤",
    content: "hello 4",
    created_date: new Date().getTime(),
  },
];

function App() {
  const navigate = useNavigate();

  function onClick() {
    navigate("/sign");
  }

  return (
    <>
      <div>Main</div>
      <div>
        <button onClick={onClick}>Login</button>
      </div>
      <PostList dummyList={dummyList} />
    </>
  );
}

export default App;
