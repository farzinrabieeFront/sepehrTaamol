import React from "react";
import Style from "../Header.module.css";
import { Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const SearchInput = ({
  handleClick,
  showSearch,
  handleChangeSearch,
  handleSubmitSearch,
}) => {
  return (
    <>
      <div
        className={`${Style.searchInput} px-3 shadow ${
          showSearch ? Style.searchInputActive : ""
        }`}
      >
        {" "}
        <Form.Group
          className="mb-3 d-flex "
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            className={Style.input}
            type="email"
            placeholder={"category?"}
            onChange={(e) => handleChangeSearch(e.target.value)}
          />

          <div
            className="py-3 px-1 justify-content-center text-dark   rounded-3 d-flex align-items-center"
            style={{ height: "36px", cursor: "pointer" }}
            onClick={handleSubmitSearch}
          >
            <Search />
          </div>
        </Form.Group>
      </div>
    </>
  );
};

export default SearchInput;
