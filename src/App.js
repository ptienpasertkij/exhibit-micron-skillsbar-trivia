import React, { useEffect, useState } from "react";
import Question from "./components/Question";
import Box from "@mui/material/Box";

// import questions from util
import { questions } from "./util/question.js";
import TeamSelect from "./components/TeamSelect";
import { db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const App = () => {
  const [team, setTeam] = useState(null);
  const [questionsArray, setQuestionsArray] = useState([...questions]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);

  const getNextQuestion = () => {
    console.log(`Remaining questions: ${questionsArray.length}`);
    console.log(questionsArray);

    const randomIndex = Math.floor(Math.random() * questionsArray.length);
    let nextQuestion = questionsArray[randomIndex];
    // remove the question from the array and update the state
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
  };

  const handleAnswer = (answer) => {
    const updateScoreFirestore = async () => {
      const scoreRef = doc(db, "score", "current_score");
      try {
        // First get current score from Firestore
        const scoreSnap = await getDoc(scoreRef);
        if (scoreSnap.exists()) {
          console.log("Score data:", scoreSnap.data());
          // Do stuff to score
          await setDoc(
            scoreRef,
            {
              [team]: scoreSnap.data()[team] + 2,
              last_updated: new Date(),
            },
            { merge: true }
          );
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      } catch (err) {
        console.log("Could not update score in Firestore");
        console.error(err);
      }
    };

    if (answer.correct) {
      // update score in firestore
      updateScoreFirestore();
      setScore(score + 2);
    }

    getNextQuestion();
  };

  const handleSetTeam = (team) => {
    setTeam(team);
    localStorage.setItem("team", team);
  };

  // update team from local storage
  useEffect(() => {
    const team = localStorage.getItem("team") || null;
    setTeam(team);
  }, [team]);

  // Update the next question
  useEffect(() => {
    getNextQuestion();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
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
