import React from "react";
import Data from "../db/Data";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className='d-flex justify-content-center'>
        <button className='btn-primary text-white p-1 px-3 mx-5 fw-bold btn' onClick={() => setItem(Data)}>
          All
        </button>
        {menuItems.map((Val, id) => {
          return (
            <button className='btn-primary text-white p-1 px-2 mx-5 btn fw-bold' onClick={() => filterItem(Val)} key={id}>
              {Val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Buttons;
