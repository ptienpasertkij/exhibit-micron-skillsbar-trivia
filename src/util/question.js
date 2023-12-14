// Q#	ANSWER	    CATEGORY
// 1	A	        STEM Skill: Patterns
// 2	D	        STEM Skill: Scale, Proportion, and Quantity
// 3	D	        STEM Skill: Structure and Function
// 4	B	        STEM Skill: Energy and Matter - Flows, Cycles, and Conservation
// 5	A	        STEM Skill: Critical Thinking
// 6	D	        STEM Skill: Cause and Effect
// 7	B	        STEM Skill: Scale, Proportion, and Quantity
// 8	C	        STEM Skill: Systems and System Models
// 9	A	        STEM Skill: Patterns
// 10	B	        STEM Skill: Systems and System Models
// 11	C	        STEM Skill: Patterns
// 12	C	        STEM Skill: Scale, Proportion, and Quantity
// 13	D	        STEM Skill: Systems and System Models
// 14	C	        STEM Skill: Scale, Proportion, and Quantity
// 15	D	        STEM Skill: Patterns
// 16	A	        STEM Skill: Systems and System Models
// 17	A	        STEM Skill: Critical Thinking
// 18	D	        STEM Skill: Critical Thinking
// 19	B	        STEM Skill: Critical Thinking
// 20	B	        STEM Skill: Critical Thinking
// 21	B	        STEM Skill: Scale, Proportion, and Quantity
// 22	A	        STEM Skill: Critical Thinking
// 23	C	        STEM Skill: Scale, Proportion, and Quantity
// 24	C	        STEM Skill: Scale, Proportion, and Quantity

const questions = [
  {
    question: require("assets/images/1Q.svg").default,
    category: "STEM Skill: Patterns",
    answers: [
      { img: require("assets/images/1A.svg").default, correct: true },
      { img: require("assets/images/1B.svg").default, correct: false },
      { img: require("assets/images/1C.svg").default, correct: false },
      { img: require("assets/images/1D.svg").default, correct: false }
    ]
  },
  {
    question: require("assets/images/2Q.svg").default,
    category: "STEM Skill: Scale, Proportion, and Quantity",
    answers: [
      { img: require("assets/images/2A.svg").default, correct: false },
      { img: require("assets/images/2B.svg").default, correct: false },
      { img: require("assets/images/2C.svg").default, correct: false },
      { img: require("assets/images/2D.svg").default, correct: true }
    ]
  },
  {
    question: require("assets/images/3Q.svg").default,
    category: "STEM Skill: Structure and Function",
    answers: [
      { img: require("assets/images/3A.svg").default, correct: false },
      { img: require("assets/images/3B.svg").default, correct: false },
      { img: require("assets/images/3C.svg").default, correct: false },
      { img: require("assets/images/3D.svg").default, correct: true }
    ]
  },
  {
    question: require("assets/images/4Q.svg").default,
    category: "STEM Skill: Energy and Matter - Flows, Cycles, and Conservation",
    answers: [
      { img: require("assets/images/4A.svg").default, correct: false },
      { img: require("assets/images/4B.svg").default, correct: true },
      { img: require("assets/images/4C.svg").default, correct: false },
      { img: require("assets/images/4D.svg").default, correct: false }
    ]
  },
  {
    question: require("assets/images/5Q.svg").default,
    category: "STEM Skill: Critical Thinking",
    answers: [
      { img: require("assets/images/5A.svg").default, correct: true },
      { img: require("assets/images/5B.svg").default, correct: false },
      { img: require("assets/images/5C.svg").default, correct: false },
      { img: require("assets/images/5D.svg").default, correct: false }
    ]
  },
  {
    question: require("assets/images/6Q.svg").default,
    category: "STEM Skill: Cause and Effect",
    answers: [
      { img: require("assets/images/6A.svg").default, correct: false },
      { img: require("assets/images/6B.svg").default, correct: false },
      { img: require("assets/images/6C.svg").default, correct: false },
      { img: require("assets/images/6D.svg").default, correct: true }
    ]
  },
  {
    question: require("assets/images/7Q.svg").default,
    category: "STEM Skill: Scale, Proportion, and Quantity",
    answers: [
      { img: require("assets/images/7A.svg").default, correct: false },
      { img: require("assets/images/7B.svg").default, correct: true },
      { img: require("assets/images/7C.svg").default, correct: false },
      { img: require("assets/images/7D.svg").default, correct: false }
    ]
  },
  {
    question: require("assets/images/8Q.svg").default,
    category: "STEM Skill: Systems and System Models",
    answers: [
      { img: require("assets/images/8A.svg").default, correct: false },
      { img: require("assets/images/8B.svg").default, correct: false },
      { img: require("assets/images/8C.svg").default, correct: true },
      { img: require("assets/images/8D.svg").default, correct: false }
    ]
  },
  {
    question: require("assets/images/9Q.svg").default,
    category: "STEM Skill: Patterns",
    answers: [
      { img: require("assets/images/9A.svg").default, correct: true },
      { img: require("assets/images/9B.svg").default, correct: false },
      { img: require("assets/images/9C.svg").default, correct: false },
      { img: require("assets/images/9D.svg").default, correct: false }
    ]
  },
  {
    question: require("assets/images/10Q.svg").default,
    category: "STEM Skill: Systems and System Models",
    answers: [
      { img: require("assets/images/10A.svg").default, correct: false },
      { img: require("assets/images/10B.svg").default, correct: true },
      { img: require("assets/images/10C.svg").default, correct: false },
      { img: require("assets/images/10D.svg").default, correct: false }
    ]
  },
  {
    question: require("assets/images/11Q.svg").default,
    category: "STEM Skill: Patterns",
    answers: [
      { img: require("assets/images/11A.svg").default, correct: false },
      { img: require("assets/images/11B.svg").default, correct: false },
      { img: require("assets/images/11C.svg").default, correct: true },
      { img: require("assets/images/11D.svg").default, correct: false }
    ]
  },
  {
    question: require("assets/images/12Q.svg").default,
    category: "STEM Skill: Scale, Proportion, and Quantity",
    answers: [
      { img: require("assets/images/12A.svg").default, correct: false },
      { img: require("assets/images/12B.svg").default, correct: false },
      { img: require("assets/images/12C.svg").default, correct: true },
      { img: require("assets/images/12D.svg").default, correct: false }
    ]
  },
  {
    question: require("assets/images/13Q.svg").default,
    category: "STEM Skill: Systems and System Models",
    answers: [
      { img: require("assets/images/13A.svg").default, correct: false },
      { img: require("assets/images/13B.svg").default, correct: false },
      { img: require("assets/images/13C.svg").default, correct: false },
      { img: require("assets/images/13D.svg").default, correct: true }
    ]
  },
  {
    question: require("assets/images/14Q.svg").default,
    category: "STEM Skill: Scale, Proportion, and Quantity",
    answers: [
      { img: require("assets/images/14A.svg").default, correct: false },
      { img: require("assets/images/14B.svg").default, correct: false },
      { img: require("assets/images/14C.svg").default, correct: true },
      { img: require("assets/images/14D.svg").default, correct: false }
    ]
  },
  {
    question: require("assets/images/15Q.svg").default,
    category: "STEM Skill: Patterns",
    answers: [
      { img: require("assets/images/15A.svg").default, correct: false },
      { img: require("assets/images/15B.svg").default, correct: false },
      { img: require("assets/images/15C.svg").default, correct: false },
      { img: require("assets/images/15D.svg").default, correct: true }
    ]
  },
  {
    question: require("assets/images/16Q.svg").default,
    category: "STEM Skill: Systems and System Models",
    answers: [
      { img: require("assets/images/16A.svg").default, correct: true },
      { img: require("assets/images/16B.svg").default, correct: false },
      { img: require("assets/images/16C.svg").default, correct: false },
      { img: require("assets/images/16D.svg").default, correct: false }
    ]
  },
  {
    question: require("assets/images/17Q.svg").default,
    category: "STEM Skill: Critical Thinking",
    answers: [
      { img: require("assets/images/17A.svg").default, correct: true },
      { img: require("assets/images/17B.svg").default, correct: false },
      { img: require("assets/images/17C.svg").default, correct: false },
      { img: require("assets/images/17D.svg").default, correct: false }
    ]
  },
  {
    question: require("assets/images/18Q.svg").default,
    category: "STEM Skill: Critical Thinking",
    answers: [
      { img: require("assets/images/18A.svg").default, correct: false },
      { img: require("assets/images/18B.svg").default, correct: false },
      { img: require("assets/images/18C.svg").default, correct: false },
      { img: require("assets/images/18D.svg").default, correct: true }
    ]
  },
  {
    question: require("assets/images/19Q.svg").default,
    category: "STEM Skill: Critical Thinking",
    answers: [
      { img: require("assets/images/19A.svg").default, correct: false },
      { img: require("assets/images/19B.svg").default, correct: true },
      { img: require("assets/images/19C.svg").default, correct: false },
      { img: require("assets/images/19D.svg").default, correct: false }
    ]
  },
  {
    question: require("assets/images/20Q.svg").default,
    category: "STEM Skill: Critical Thinking",
    answers: [
      { img: require("assets/images/20A.svg").default, correct: false },
      { img: require("assets/images/20B.svg").default, correct: true },
      { img: require("assets/images/20C.svg").default, correct: false },
      { img: require("assets/images/20D.svg").default, correct: false }
    ]
  },
  {
    question: require("assets/images/21Q.svg").default,
    category: "STEM Skill: Scale, Proportion, and Quantity",
    answers: [
      { img: require("assets/images/21A.svg").default, correct: false },
      { img: require("assets/images/21B.svg").default, correct: true },
      { img: require("assets/images/21C.svg").default, correct: false },
      { img: require("assets/images/21D.svg").default, correct: false }
    ]
  },
  {
    question: require("assets/images/22Q.svg").default,
    category: "STEM Skill: Critical Thinking",
    answers: [
      { img: require("assets/images/22A.svg").default, correct: true },
      { img: require("assets/images/22B.svg").default, correct: false },
      { img: require("assets/images/22C.svg").default, correct: false },
      { img: require("assets/images/22D.svg").default, correct: false }
    ]
  },
  {
    question: require("assets/images/23Q.svg").default,
    category: "STEM Skill: Scale, Proportion, and Quantity",
    answers: [
      { img: require("assets/images/23A.svg").default, correct: false },
      { img: require("assets/images/23B.svg").default, correct: false },
      { img: require("assets/images/23C.svg").default, correct: true },
      { img: require("assets/images/23D.svg").default, correct: false }
    ]
  },
  {
    question: require("assets/images/24Q.svg").default,
    category: "STEM Skill: Scale, Proportion, and Quantity",
    answers: [
      { img: require("assets/images/24A.svg").default, correct: false },
      { img: require("assets/images/24B.svg").default, correct: false },
      { img: require("assets/images/24C.svg").default, correct: true },
      { img: require("assets/images/24D.svg").default, correct: false }
    ]
  }
];

const shuffleAnswers = (answers) => {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }
  return answers;
};

let questionHistory = [];

const getNextQuestion = () => {
  let availableQuestions = questions.filter(
    (q) => !questionHistory.includes(q.question)
  );

  if (availableQuestions.length === 0) {
    questionHistory = []; // Reset history if all questions have been asked
    availableQuestions = [...questions];
  }

  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const selectedQuestion = availableQuestions[randomIndex];

  // Update history
  questionHistory.push(selectedQuestion.question);
  if (questionHistory.length > 10) {
    questionHistory.shift(); // Keep only the last 10 questions in history
  }

  // Shuffle answers
  selectedQuestion.answers = shuffleAnswers([...selectedQuestion.answers]);

  return selectedQuestion;
};

export { getNextQuestion };
