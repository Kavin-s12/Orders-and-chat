import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const ChatButton = ({ onClick }) => {
  return (
    <Button
      variant='light'
      onClick={onClick}
      className='position-fixed'
      style={{ bottom: "50px", right: "50px" }}
    >
      <FontAwesomeIcon icon={faComment} size='3x' />
    </Button>
  );
};

export default ChatButton;
