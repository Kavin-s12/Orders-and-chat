import React, { useState } from "react";
import { Container } from "react-bootstrap";
import OrderForm from "../components/OrderForm.js";

const OrderScreen = () => {
  const [show, setShow] = useState(true);

  const completed = () => {
    setShow(false);
  };

  return (
    <Container className='p-5 d-flex align-items-center justify-content-center'>
      {show ? (
        <OrderForm completed={completed} />
      ) : (
        <p>
          Order confirmed. Place Order{" "}
          <span
            className='text-danger cursor-pointer'
            onClick={() => setShow(true)}
          >
            again?
          </span>
        </p>
      )}
    </Container>
  );
};

export default OrderScreen;
