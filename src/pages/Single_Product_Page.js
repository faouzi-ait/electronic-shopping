import React from "react";
import { useParams } from "react-router-dom";

export default function Single_Product_Page() {
  const param = useParams();

  console.log(Number(param.id));

  return <div className="product">SingleProduct Page</div>;
}
