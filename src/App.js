import React, { useEffect, useState } from "react";
import Question from "./components/Question";
import Box from "@mui/material/Box";

// import questions from util
import TeamSelect from "components/TeamSelect";
import "util/preloadImages.js";
import { getNextQuestion } from "util/question.js";
import {
  getFromLocalStorage,
  saveToLocalStorage,
  establishSocketConnection
} from "util/util.js";
import ConnectionErrorNotification from "components/ConnectionErrorNotification";

const App = () => {
  const [team, setTeam] = useState(getFromLocalStorage("team", null));
  const [currentQuestion, setCurrentQuestion] = useState(getNextQuestion());
  const [socket, setSocket] = useState(null); // State to track socket connection
  const [connectionError, setConnectionError] = useState(false); // State to track if there is a connection error

  const handleAnswer = (answer) => {
    if (answer.correct) {
      // update score on local server
      socket.emit("updateScore", { team: team });
    }
    setCurrentQuestion(getNextQuestion());
  };

  // update team from local storage
  useEffect(() => {
    const team = localStorage.getItem("team") || null;
    setTeam(team);
  }, [team]);

  const handleSetTeam = (team) => {
    setTeam(team);
    saveToLocalStorage("team", team);
  };

  // Establish socket connection
  useEffect(() => {
    const disconnectSocket = establishSocketConnection(
      setConnectionError,
      setSocket
    );
    return () => {
      disconnectSocket();
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw"
      }}
    >
      {!team && <TeamSelect setTeam={handleSetTeam} />}
      {team && currentQuestion && (
        <>
          {connectionError && <ConnectionErrorNotification />}
          <Question question={currentQuestion} handleAnswer={handleAnswer} />
        </>
      )}
    </Box>
  );
};

export default App;
