import React, { useEffect, useState } from "react";
import Style from "./Header.module.css";
import { Search } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actionLists } from "../../../../redux/lists/actionLists";
import { useLocation } from "react-router-dom";
import Account from "./components/Account";
import SearchInput from "./components/SearchInput";
const Header = () => {
  ////////////////////////////////////////////////////////////////////states
  const data = useSelector((state) => state.listsState);
  const [state, setState] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  ////////////////////////////////////////////////////////////////////hooks
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (sessionStorage.getItem("auth")) {
      const auth = JSON.parse(sessionStorage.getItem("auth"));
      setState(auth[0]);
    }
  }, []);

  ////////////////////////////////////////////////////////////////////functions
  const handleClick = () => {
    setShowSearch(!showSearch);
  };
  const handleChangeSearch = (value) => {
    setSearch(value);
  };
  const handleSubmitSearch = () => {
    dispatch(actionLists(search));
  };
  return (
    <>
      <header className={`${Style.header} shadow`}>
        <Container className="h-100">
          <div className="w-100 h-100 d-flex justify-content-between align-items-center position-relative ">
            <div className="d-flex align-items-center ">
              <div className="d-flex align-items-center h-100  me-3">
                <Account state={state} setState={setState} />
              </div>
              {location.pathname.includes("products") ? null : (
                <div>
                  <span className="me-1">{data?.lists?.length}</span>
                  <Search
                    size={20}
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                    className={showSearch ? "text-success" : ""}
                  />
                </div>
              )}
              <SearchInput
                showSearch={showSearch}
                handleClick={handleClick}
                handleChangeSearch={handleChangeSearch}
                handleSubmitSearch={handleSubmitSearch}
              />
            </div>
            <div className="d-flex align-items-center h-100 ">
              <img
                src={"/logo192.png"}
                alt=""
                className="img-fluid"
                style={{ width: "75px", height: "60px" }}
              />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
