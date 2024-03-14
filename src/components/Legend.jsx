import React from "react";

export default function Legend({ text, style }) {
  return (
    <>
      <div className="budget-price">
        <div
          className="budget-price-square"
          data-width="20"
          style={{
            width: "20px",
            ...style,
          }}
        ></div>
        <div className="budget-price-label">{text}</div>
      </div>
      <style jsx>
        {`
          .budget-price {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 3px;
            justify-content: center !important;
          }
          .budget-price-square {
            width: 15px;
            height: 3px;
          }
          .budget-price-label {
            font-size: 12px;
            font-weight: 600;
            margin-left: 5px;
          }
        `}
      </style>
    </>
  );
}
