import React, { useEffect, useState } from "react";
import Question from "./components/Question";

// import questions from util
import { questions } from "./util/question.js";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [questionSet, setQuestionSet] = useState(questions);

  const getNextQuestion = () => {
    if (questionSet.length === 0) {
      setQuestionSet(questions);
    }
    const randomIndex = Math.floor(Math.random() * questionSet.length);
    let nextQuestion = questionSet[randomIndex];
    setQuestionSet(questionSet.filter((question) => question !== nextQuestion));
    setCurrentQuestion(nextQuestion);
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
      {score}
    </>
  );
};

export default App;
