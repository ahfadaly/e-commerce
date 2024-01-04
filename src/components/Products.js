import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./redux/CartSlice";
import { fethProducts } from "./redux/productsSlice";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fethProducts());
  }, []);

  return (
    <>
      <Container className="mt-5 pt-5">
        <Row>
          {products.map((item) => (
            <div className="col-xl-3 col-lg-4 col-sm-6 product-card text-center" key={item.id}>
              <Slide bottom duration={2000}>
                <Card className="p-3 mb-3">
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title className="title">{item.title.slice(0, 15)}.. </Card.Title>
                    <Card.Text className="desc">{item.description.slice(0, 25)}...</Card.Text>
                    <Card.Text>{item.price}</Card.Text>
                    <div className="d-flex gap-2">
                      <Link to={`/product/${item.id}`} className="btn btn-danger" href="/">
                        Details
                      </Link>
                      <Button variant="primary" onClick={() => dispatch(addToCart(item))}>
                        Add To Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Slide>
            </div>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;
