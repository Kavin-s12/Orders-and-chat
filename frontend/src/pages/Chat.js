import React from "react";
import { Col, Row } from "react-bootstrap";
import OrderBox from "../components/OrderBox";
import ChatWindow from "../components/ChatWindow";

const Chat = ({ messages, setMessages }) => {
  return (
    <Row>
      <Col>
        <OrderBox />
      </Col>
      <Col>
        <ChatWindow messages={messages} setMessages={setMessages} />
      </Col>
    </Row>
  );
};

export default Chat;
