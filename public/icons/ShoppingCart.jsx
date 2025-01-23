import * as React from "react";

const ShoppingCart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    className={props.className}
    {...props}
  >
    <path d="M8 5.5a3.5 3.5 0 0 1 6-2.45 3.5 3.5 0 0 1 6 2.45V8h2.5A1.5 1.5 0 0 1 24 9.5V22a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9.5A1.5 1.5 0 0 1 5.5 8H8V5.5ZM18.5 8V5.5a2 2 0 0 0-3.674-1.094c.116.353.174.722.174 1.094V8h3.5Zm-5-2.5a2 2 0 1 0-4 0V8h4V5.5Zm2.5 4H5.5V22A2.5 2.5 0 0 0 8 24.5h8.877A4 4 0 0 1 16 22V9.5Zm4 15a2.5 2.5 0 0 0 2.5-2.5V9.5h-5V22a2.5 2.5 0 0 0 2.5 2.5Z" />
  </svg>
);

export default ShoppingCart;
