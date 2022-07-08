import React, { useEffect } from "react";
import classes from "./index.module.scss";
import ImgProduct from "./components/imgProduct";
import DetailProduct from "./components/detailProduct";
import { useDispatch, useSelector } from "react-redux";
import { actionLists } from "../../redux/lists/actionLists";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const DetailsProducts = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const data = useSelector((state) => state.listsState);
  useEffect(() => {
    dispatch(actionLists(null, params.id));
  }, []);

  return (
    <>
      {data.loading ? (
        <CircularProgress />
      ) : (
        <section className={classes.root}>
          <div className={`box-container ${classes.box}`}>
            <div className="row">
              <div className="col-12 col-md-4">
                <ImgProduct data={data.lists} />
              </div>
              <div className="col-12 col-md-8">
                <DetailProduct data={data.lists} />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DetailsProducts;
