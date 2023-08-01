import React, { useEffect, useState } from "react";
import Question from "./components/Question";

// import questions from util
import { questions } from "./util/question.js";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [questionSet, setQuestionSet] = useState(questions);

  const getNextQuestion = () => {
    setQuestionSet(prevQuestionSet => {
      if (prevQuestionSet.length === 0) {
        return questions;
      }
      const randomIndex = Math.floor(Math.random() * prevQuestionSet.length);
      const nextQuestion = prevQuestionSet[randomIndex];
      const newQuestionSet = prevQuestionSet.filter(question => question !== nextQuestion);
      setCurrentQuestion(nextQuestion);
      return newQuestionSet;
    })
  };

  const handleAnswer = (answer) => {
    if (answer.correct) {
      setScore(score + 2);
    }
    getNextQuestion();
  };

  useEffect(() => {
    getNextQuestion();
  }, []);

  return (
    <>
      {currentQuestion && <Question question={currentQuestion} handleAnswer={handleAnswer} />}
    </>
  );
};

export default App;
