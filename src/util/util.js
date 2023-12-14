import socketIO from "socket.io-client";
const SERVER = "http://192.168.20.14:5000";

export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key, defaultValue) => {
  return localStorage.getItem(key) || defaultValue;
};

export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

/**
 * Returns a random question from the given array of questions.
 *
 * @param {Array} questionsArray - The array of questions to choose from.
 * @returns {Object} - A randomly selected question from the array.
 */
export const getRandomQuestion = (questionsArray) => {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
};

export const establishSocketConnection = (setConnectionError, setSocket) => {
  const socket = socketIO(SERVER, {
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelay: 1000, // Starts with 1 second delay, then 2, 4, 8, until 1 minute has passed.
    reconnectionDelayMax: 60000 // Never wait longer than 1 minute.
  });

  socket.on("connect", () => {
    console.log(`Connected to socket server at ${SERVER}`);
    setConnectionError(false);
  });

  socket.on("connect_error", (error) => {
    console.log("connect_error", error);
    setConnectionError(true);
  });

  socket.on("error", (error) => {
    console.log("error", error);
    setConnectionError(true);
  });

  socket.on("reconnect_error", (error) => {
    console.log("reconnect_error", error);
    setConnectionError(true);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected from socket server");
  });

  // Save socket instance to state
  setSocket(socket);

  // Cleanup function
  const disconnectSocket = () => {
    socket.disconnect();
    console.log("Socket disconnected");
  };

  return disconnectSocket;
};
