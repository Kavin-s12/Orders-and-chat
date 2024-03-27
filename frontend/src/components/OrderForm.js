import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";

const OrderForm = ({ completed }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [item, setItem] = useState("");
  const [orderItems, setOrderItems] = useState([]);
  const [expectedDate, setExpectedDate] = useState("");

  const addItem = () => {
    if (item.trim()) {
      const items = orderItems;
      items.push(item);
      setOrderItems(items);
      setItem("");
    }
  };

  const submitHandler = async () => {
    const body = {
      customer_name: name,
      mobile_no: mobile,
      items_ordered: orderItems,
      expected_delivery_date: expectedDate,
    };

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    try {
      await axios.post("/order", JSON.stringify(body), config);
      completed();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form className='w-75'>
      <Form.Group className='form-group' controlId='name'>
        <Form.Label>Name :</Form.Label>
        <Form.Control
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </Form.Group>
      <Form.Group className='form-group'>
        <Form.Label>Mobile No :</Form.Label>
        <Form.Control
          type='number'
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
        />
      </Form.Group>
      <Form.Group className='form-group'>
        <Form.Label>Order Items :</Form.Label>
        <Row>
          <Col>
            <Form.Control
              type='text'
              onChange={(e) => setItem(e.target.value)}
              value={item}
            />
          </Col>
          <Col xs={2}>
            <Button onClick={addItem} disabled={!item.trim()}>
              Add
            </Button>
          </Col>
        </Row>
        <ol>
          {orderItems.map((orderItem, index) => (
            <li key={index}>{orderItem}</li>
          ))}
        </ol>
      </Form.Group>
      <Form.Group className='form-group'>
        <Form.Label>Expected Delivery Date :</Form.Label>
        <Form.Control
          type='date'
          onChange={(e) => setExpectedDate(e.target.value)}
          value={expectedDate}
        />
      </Form.Group>

      <Button
        className='my-3 text-center'
        onClick={submitHandler}
        disabled={
          !name.trim() |
          !expectedDate.trim() |
          !mobile.trim() |
          !orderItems.length
        }
      >
        Submit
      </Button>
    </Form>
  );
};

export default OrderForm;
