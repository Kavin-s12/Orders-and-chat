import React, { useEffect, useState } from "react";
import Order from "./Order.js";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import socket from "../socket.js";

const OrderBox = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrder = async () => {
    const { data } = await axios.get("/orders");
    setOrders(data);
  };
  socket.on("newOrder", (order) => {
    fetchOrder();
  });

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <Container className='order-container'>
      <Row>
        {orders?.map((order) => (
          <Col key={order.id}>
            <Order order={order} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OrderBox;
