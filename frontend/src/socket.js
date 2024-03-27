import io from "socket.io-client";

const END_POINT = "http://localhost:5000";
const socket = io(END_POINT);

export default socket;
