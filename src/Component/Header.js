import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="header-nav">
          <span>헤더1</span>
          <span>헤더2</span>
          <span>헤더3</span>
          <span>헤더4</span>
          <span>헤더5</span>
        </div>

        <div className="myaccount">
          <button>내정보</button>
        </div>
      </div>
    </>
  );
};

export default Header;
