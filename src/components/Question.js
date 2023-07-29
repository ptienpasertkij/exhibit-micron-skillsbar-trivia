import React, { useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stripe from "./Stripe";
import Answer from "./Answer";

const Question = ({ question, handleAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);

    setTimeout(() => {
      handleAnswer(answer);
    }, 2000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        flexGrow={1}
        width="100%"
        sx={{
          backgroundImage: `url(${question.question})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          boxSizing: "border-box",
          padding: { lg: "300px 100px 40px 100px", xs: "100px 20px 40px 20px" },
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-between",
          gap: { xs: "40px", lg: "30px" },
        }}
      >
        {/* map the answers */}
        {question.answers.map((answer, index) => (
          <Answer
            key={index}
            answer={answer}
            handleAnswer={handleAnswerClick}
            index={index}
            selectedAnswer={selectedAnswer}
          />
        ))}
      </Box>
      <Stripe />
      <Box
        height={130}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "100px", md: "130px" },
        }}
      >
        <Typography
          fontFamily={"Poppins, sans-serif"}
          fontSize={"2rem"}
          textAlign={"center"}
          sx={{
            fontSize: { xs: "1.25rem", md: "2rem" },
          }}
        >
          {question.category}
        </Typography>
      </Box>
    </Box>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  handleAnswer: PropTypes.func.isRequired,
};

export default Question;
