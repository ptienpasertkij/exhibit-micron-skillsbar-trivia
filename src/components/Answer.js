import React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "../Question.module.css";

const Answer = ({ answer, handleAnswer, index, selectedAnswer }) => {
  // Determine if this answer has been selected
  const isSelected = selectedAnswer && selectedAnswer.img === answer.img;

  //   Determine if the selected answer is correct
  const isCorrect = isSelected && selectedAnswer.correct;

  let innerBackgroundColor;
  if (isSelected) {
    innerBackgroundColor = isCorrect ? "#87b764" : "#ED3D50";
  } else {
    innerBackgroundColor = "black";
  }

  const classNames = [styles.answerBox];

  if (isSelected) {
    classNames.push(isCorrect ? styles.correctAnswer : styles.wrongAnswer);
  } else {
    classNames.push(styles.gradientBorder);
  }

  const className = classNames.join(" ");

  return (
    <Box
      key={index}
      width={{ xs: "100%", md: "calc(50% - 30px)" }}
      className={className}
      sx={{
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: { xs: "5px", md: "10px" },
        position: "relative",
        boxSizing: "border-box",
        borderRadius: "20px",
        overflow: "hidden",
      }}
      onClick={() => handleAnswer(answer)}
    >
      <Box
        sx={{
          background: innerBackgroundColor,
          display: "flex",
          flexFlow: `${isSelected ? "column" : "row"}`,
          justifyContent: `${isSelected ? "center" : "flex-start"}`,
          alignItems: "center",
          height: "90%",
          width: "100%",
          padding: { xs: "5px 20px", md: "10px 30px", lg: "10px 40px" },
          borderRadius: { xs: "15px", md: "20px" },
          zIndex: 2,
        }}
      >
        {isSelected ? (
          <>
            <Typography
              fontFamily={"kallisto"}
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem", lg: "3rem" },
                fontWeight: 700,
              }}
            >
              {isCorrect ? "Correct!" : "Incorrect"}
            </Typography>
            <Typography
              fontFamily={"kallisto-lined, sans-serif"}
              sx={{
                fontSize: { xs: "1.25rem", md: "1.5rem", lg: "2rem" },
              }}
            >{`+${isCorrect ? "2" : "0"} points`}</Typography>
          </>
        ) : (
          <>
            <Typography
              fontWeight={600}
              color={isSelected ? "white" : "#3bacab"}
              sx={{
                // marginRight: { xs: "25px", md: "30px" },
                fontSize: { xs: "2rem", md: "4rem", lg: "5rem" },
              }}
            >
              {String.fromCharCode(65 + index)}
            </Typography>
            <img src={answer.img} alt={`Answer ${index + 1}`} className={styles.answer} />
          </>
        )}
      </Box>
    </Box>
  );
};

Answer.propTypes = {
  answer: PropTypes.object.isRequired,
  handleAnswer: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Answer;
