import React, { useCallback, useEffect, useState } from "react";
import Question from "./components/Question";
import Box from "@mui/material/Box";

// import questions from util
import TeamSelect from "components/TeamSelect";
import { questions } from "util/question.js";
import { updateScoreFirestore, useResetScoreAtMidnight } from "util/util.js";

const App = () => {
  const [team, setTeam] = useState(null);
  const [questionsArray, setQuestionsArray] = useState([...questions]);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const getNextQuestion = useCallback(() => {
    console.log(`Remaining questions: ${questionsArray.length}`);
    console.log(questionsArray);

    const randomIndex = Math.floor(Math.random() * questionsArray.length);
    let nextQuestion = questionsArray[randomIndex];
    setCurrentQuestion(nextQuestion);

    // remove the question from the array and update the state, if questionsArray.length === 1, reset the questionsArray
    setQuestionsArray((questionsArray) => {
      if (questionsArray.length === 1) {
        console.log("Resetting questions array");
        return [...questions];
      } else {
        return questionsArray.filter((question) => question !== nextQuestion);
      }
    });
  }, []);

  const handleAnswer = (answer) => {
    if (answer.correct) {
      // update score in firestore
      updateScoreFirestore(team);
    }
    getNextQuestion();
  };

  const handleSetTeam = (team) => {
    setTeam(team);
    localStorage.setItem("team", team);
  };

  useResetScoreAtMidnight(); // useEffect to reset the score at midnight

  // update team from local storage
  useEffect(() => {
    const team = localStorage.getItem("team") || null;
    setTeam(team);
  }, [team]);

  // Update the next question
  useEffect(() => {
    getNextQuestion();
  }, [getNextQuestion]);

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
