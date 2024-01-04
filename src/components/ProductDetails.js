import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const api_url = "https://fakestoreapi.com/products/";
  const [prodact, setProduct] = useState([]);
  const prams = useParams();

  useEffect(() => {
    fetch(`${api_url}/${prams.productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  });

  return (
    <>
      <div className="border col-md-8 m-auto mt-5 p-3 pt-5 shadow-sm">
        <img src={prodact.image} alt="" style={{ width: "200px" }} />
        <h4 className="my-2"> {prodact.title}</h4>
        <p className="lead">{prodact.description}</p>
        <h6>{prodact.category}</h6>
        <h2> {prodact.price}</h2>
      </div>
    </>
  );
};

export default ProductDetails;
