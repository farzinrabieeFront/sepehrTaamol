import React from "react";
import classes from "./../index.module.scss";

export default function ImgProduct({ data }) {
  return (
    <aside className={classes.imageCard}>
      <img src={data?.image} alt={data?.title} />
    </aside>
  );
}
