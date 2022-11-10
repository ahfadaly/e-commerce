import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import { rmoveCart, clear } from "./redux/CartSlice";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <>
      <div className="container pt-5 cart-card">
        <div className="row pt-5">
          <div className="col-md-3">
            <div className="sidebar shadow-sm border p-2">
              <h4>Total Price : {totalPrice.toFixed(2)} $</h4>
              <Button variant="dark mb-3" onClick={() => dispatch(clear())}>
                Clear Card
              </Button>
            </div>
          </div>
          <div className="col-md-9 mb-3">
            <div className="row overflow-scroll mt-sm-0 mt-3">
              {cart.map((item) => (
                <div className="col-xl-4 col-md-6">
                  <div className="box border shadow-sm mb-3 p-2 text-center">
                    <Image src={item.image} alt="" />
                    <h6>Price : {item.price}$</h6>
                    <h6>quantity : {item.quantity}</h6>
                    <Button variant="danger" className="w-100" onClick={() => dispatch(rmoveCart(item))}>
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
