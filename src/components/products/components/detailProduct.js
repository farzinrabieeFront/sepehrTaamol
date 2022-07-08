import React from "react";
import classes from "./../index.module.scss";
import Rating from "@mui/material/Rating";

export default function DetailProduct({ data }) {
  return (
    <article className={classes.rootDetailProduct}>
      <div>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <h4 className="m-0">{data.title}</h4>
          <Rating name="read-only" value={data?.rating?.rate} readOnly />
        </div>

        <p className="text-muted">{data?.category}</p>
        <p className="text-danger h4">${data?.price}</p>
      </div>

      <div className={classes.description}>
        <h5>description:</h5>
        <p className="text-muted">{data?.description}</p>
      </div>

      <div className={classes.button}>
        <button type="button" className="btn btn-labeled btn-danger">
          <span className="btn-label m-2"></span>
          <span className="m-2 d-inline-block h5">add to card</span>
        </button>
      </div>
    </article>
  );
}
