import React, { useEffect, useState } from "react";
import "./ProductInfo.css";
import productsData from "../../data.json";
import { useParams } from "react-router-dom";
function ProductInfo() {
  const params = useParams();
  //   const [product, setProduct] = useState();
  const ProductInfo = productsData.map((product) => {
    return product.id === params.ProductId;
  });
  console.log(ProductInfo);
  useEffect(() => {}, []);

  console.log(params.ProductId);
  return <div></div>;
}

export default ProductInfo;
