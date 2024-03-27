import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import socket from "../socket";
import ScrollableFeed from "react-scrollable-feed";

const ChatWindow = ({ messages, setMessages }) => {
  const [message, setMessage] = useState("");

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      socket.emit("sendMessage", message);
      setMessages(message);
      setMessage("");
    }
  };

  return (
    <Container className='chat-window-container'>
      <ScrollableFeed className='message'>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              marginTop: 2,
              display: "flex",
              justifyContent: msg.sent ? "flex-end" : "flex-start",
            }}
          >
            <span
              style={{
                background: `${msg.sent ? "#BEE3F8" : "#B9F5D0"}`,
                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </ScrollableFeed>

      <Form onSubmit={handleMessageSubmit} className='input-form'>
        <Form.Control
          type='text'
          placeholder='Type your message...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type='submit'>Send</Button>
      </Form>
    </Container>
  );
};

export default ChatWindow;
