import React, { useEffect, useState } from "react";
import Question from "./components/Question";
import Box from "@mui/material/Box";

// import questions from util
import { questions } from "./util/question.js";
import TeamSelect from "./components/TeamSelect";
import {db} from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const App = () => {
  const [team, setTeam] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);


  const getNextQuestion = () => {
    if (questions.length === 0) {
      questions = [...questions];
    }
    const randomIndex = Math.floor(Math.random() * questions.length);
    let nextQuestion = questions[randomIndex];
    questions.splice(randomIndex, 1);
    setCurrentQuestion(nextQuestion);
  };

  const handleAnswer = (answer) => {
    const updateScoreFirestore = async () => {
      const scoreRef = doc(db, "score", "current_score");
      try {
        await setDoc(scoreRef, {
          [team]: score + 2
        }, { merge: true })
      } catch(err) {
        console.log("Could not update score in Firestore");
        console.error(err);
      }
    }

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
  }

  // update team from local storage
  useEffect(() => {
    const getScoreFromFirestore = async () => {
      const scoreRef = doc(db, "score", "current_score");
      const scoreSnap = await getDoc(scoreRef);
      if (scoreSnap.exists()) {
        console.log("Document data:", scoreSnap.data());
        setScore(scoreSnap.data()[team]);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    const team = localStorage.getItem("team") || null;
    setTeam(team);
    
    if(team) {
      getScoreFromFirestore();
    }

    // Get the current score from Firestore
    // db.collection("score").doc("current_score").get().then((doc) => {
    //   if (doc.exists) {
    //     setScore(doc.data()[team]);
    //   } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    //   }
    // }).catch((error) => {
    //   console.error("Error getting document:", error);
    // }
    // );
  }, [team]);

  // Update the next question
  useEffect(() => {
    getNextQuestion();
  }, []);

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: '100vw',
    }}>
      {!team && <TeamSelect setTeam={handleSetTeam} />}
      {team && currentQuestion && <Question question={currentQuestion} handleAnswer={handleAnswer} />}
    </Box>
  );
};

export default App;
