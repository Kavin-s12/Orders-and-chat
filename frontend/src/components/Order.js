import React from "react";
import { Card } from "react-bootstrap";

const Order = ({ order }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Body>
        <Card.Title as='h3'>Order {order.id}</Card.Title>

        <Card.Text>
          <strong>Name: </strong> {order.customer_name}
        </Card.Text>

        <Card.Text>
          <strong>Mobile No: </strong> {order.mobile_no}
        </Card.Text>

        <Card.Text>
          <strong>Items Ordered: </strong>
          <ul>
            {order.items_ordered.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Card.Text>

        <Card.Text>
          <strong>Delivery Date: </strong>{" "}
          {order.expected_delivery_date.substring(0, 10)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Order;
