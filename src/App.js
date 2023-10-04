import React, { useEffect, useState } from "react";
import Question from "./components/Question";
import Box from "@mui/material/Box";

// import questions from util
import TeamSelect from "components/TeamSelect";
import "util/preloadImages.js";
import { questions } from "util/question.js";
import {
  getFromLocalStorage,
  getRandomQuestion,
  saveToLocalStorage,
  updateScoreFirestore,
  useResetScoreAtMidnight
} from "util/util.js";

const App = () => {
  const [team, setTeam] = useState(getFromLocalStorage("team", null));
  const [questionsArray, setQuestionsArray] = useState([...questions]);
  const [currentQuestion, setCurrentQuestion] = useState(
    getRandomQuestion(questionsArray)
  );

  const getNextQuestion = () => {
    setQuestionsArray((prevQuestionsArray) => {
      let nextQuestionsArray;

      // When only one question is left in the array
      if (prevQuestionsArray.length === 1) {
        setCurrentQuestion(getRandomQuestion(questions)); // Set a random question from the original list
        nextQuestionsArray = [...questions]; // Reset the questionsArray
      } else {
        const nextQuestion = getRandomQuestion(prevQuestionsArray);
        setCurrentQuestion(nextQuestion);
        nextQuestionsArray = prevQuestionsArray.filter(
          (question) => question !== nextQuestion
        );
      }

      return nextQuestionsArray;
    });
  };

  const handleAnswer = (answer) => {
    if (answer.correct) {
      // update score in firestore
      updateScoreFirestore(team);
    }
    getNextQuestion();
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

  useResetScoreAtMidnight(); // useEffect to reset the score at midnight

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
        <Question question={currentQuestion} handleAnswer={handleAnswer} />
      )}
    </Box>
  );
};

export default App;
