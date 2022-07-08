import React from "react";
import Style from "./List.module.css";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const Cards = ({ itm }) => {
  return (
    <>
      <Card className={`${Style.card} shadow`}>
        <div className={Style.cardImg}>
          <Card.Img variant="top" src={itm?.image} />
        </div>

        <Card.Body>
          <Card.Title>
            <div className={Style.ellipsis}> {itm?.title}</div>
          </Card.Title>
          <Card.Text>
            <div className={Style.ellipsis2}>{itm?.category}</div>
            <div
              className="d-flex align-items-center"
              style={{ height: "40px" }}
            >
              <div className="text-muted h5">${itm?.price}</div>
            </div>
          </Card.Text>
          <Link to={`/products/${itm?.id}`}>
            <Button
              className="btn-success"
              // onClick={() => handleDetais(itm)}
            >
              details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
