import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionLists } from "../redux/lists/actionLists";
import { Col, Row } from "react-bootstrap";
import { CircularProgress, Pagination } from "@mui/material";
import Cards from "./Cards";
const List = () => {
  /////////////////////////////////////////////////////////////////////////////////states
  const data = useSelector((state) => state.listsState);
  const [page, setPage] = useState(1);
  const [sliceState, setSliceState] = useState(5);
  /////////////////////////////////////////////////////////////////////////////////hooks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionLists());
  }, []);
  useEffect(() => {
    setSliceState(page * 5);
  }, [page]);
  /////////////////////////////////////////////////////////////////////////////////functions
  const handleChangePagination = (event, value) => {
    setPage(value);
  };

  return (
    <>
      {data.loading ? (
        <CircularProgress />
      ) : (
        <div>
          <Row className="justify-content-start mb-4">
            {data.lists.length > 0
              ? data.lists
                  .map((itm, ind) => (
                    <Col
                      xs={12}
                      md={6}
                      lg={4}
                      key={ind}
                      className="mb-3 d-flex justify-content-center"
                    >
                      <Cards itm={itm} />
                    </Col>
                  ))
                  .slice(sliceState - 5, sliceState)
              : null}
          </Row>
          <Row>
            <Col className="d-flex justify-content-center" xs={12}>
              {data?.lists?.length > 5 && (
                <Pagination
                  count={Math.floor(data?.lists?.length / 5)}
                  page={page}
                  onChange={handleChangePagination}
                />
              )}
            </Col>
          </Row>

          {/*<ModalCustom*/}
          {/*  item={item}*/}
          {/*  open={open}*/}
          {/*  handleOpen={handleOpen}*/}
          {/*  handleClose={handleClose}*/}
          {/*/>*/}
        </div>
      )}
    </>
  );
};

export default List;
