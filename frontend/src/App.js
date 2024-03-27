import { useEffect, useState } from "react";
import Chat from "./pages/Chat.js";
import socket from "./socket.js";
import { Modal } from "react-bootstrap";
import OrderScreen from "./pages/OrderScreen.js";
import ChatButton from "./components/ChatButton.js";

function App() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit("join group");

    // Add event listener for 'message' event
    socket.on("message", (newMessage) => {
      console.log("executed");
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: newMessage, sent: false },
      ]);
    });

    // Clean up the event listener when component unmounts
    return () => {
      socket.off("message");
    };
  }, []);

  const updateMessage = (text) => {
    setMessages((prevMessages) => [...prevMessages, { text, sent: true }]);
  };

  return (
    <div className='App'>
      <h1 className='text-center'>Shopping Cart Details</h1>
      <OrderScreen />

      <ChatButton onClick={() => setShowChat(true)} />

      <Modal show={showChat} onHide={() => setShowChat(false)} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title className='text-center w-100'>
            Orders and Chat
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Chat messages={messages} setMessages={updateMessage} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
