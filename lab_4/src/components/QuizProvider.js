import React, { createContext, useReducer, useEffect, useState } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [
    {
      id: 1,
      question: "Động vật nào có thể thay đổi màu sắc để nguỵ trang?",
      options: ["Cá mập ", " Tắc kè hoa", "Chim cánh cụt", " Chuột túi "],
      answer: "Tắc kè hoa ",
    },
    {
      id: 2,
      question: "Loài chim nào có thể bắt chước giọng nói con người?",
      options: ["Đại bàng", "Công ", "Vẹt", "Cú mèo"],
      answer: "Vẹt",
    },
    {
      id: 3,
      question: "Động vật nào có tốc độ chạy nhanh nhất trên cạn?",
      options: [" Ngựa ", "Báo gêpa ", "Thỏ", "Chó sói"],
      answer: "Báo gêpa",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };

    case "NEXT_QUESTION":
      const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
      const nextQuestion = state.currentQuestion + 1;

      if (nextQuestion >= state.questions.length) {
        return { ...state, showScore: true, score: isCorrect ? state.score + 1 : state.score };
      }

      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: nextQuestion,
        selectedOption: "",
      };

    case "RESTART_QUIZ":
      return { ...initialState };

    default:
      return state;
  }
}

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (state.showScore) return;

    if (timeLeft === 0) {
      dispatch({ type: "NEXT_QUESTION" });
      setTimeLeft(10);
      return;
    }

    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, state.showScore]);

  return (
    <QuizContext.Provider value={{ state, dispatch, timeLeft, setTimeLeft }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;