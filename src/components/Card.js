import React from "react";
import truncate from "../utils/truncate";

const Card = ({ item }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item?.map((Val) => {
            return (
              <div
                className="flex col-md-4 col-sm-6 my-3 py-3 border-0"
                key={Val.id}
              >
                <div className="card-img-top text-center">
                  <img src={Val.img} alt={Val.title} className="img-responsive" />
                </div>
                <div className="card-body">
                  <div className="card-title fw-bold fs-5">
                    {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;
                    {Val.price}
                  </div>
                  <div className="card-text fw-light fs-10">{truncate(Val.desc, 108)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
