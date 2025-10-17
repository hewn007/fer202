import React, { useReducer, useEffect, useRef } from 'react';
import { Button, Container, Card, ProgressBar } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const initialState = {
  questions: [
    {
      id: 1,
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      answer: 'Canberra',
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
    {
      id: 3,
      question: 'What is the largest ocean on Earth?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
      answer: 'Pacific Ocean',
    },
  ],
  currentQuestion: 0,
  selectedOption: '',
  score: 0,
  showScore: false,
  feedback: '',
};

function quizReducer(state, action) {
  switch (action.type) {
    case 'SELECT_OPTION':
      return { ...state, selectedOption: action.payload, feedback: '' };

    case 'NEXT_QUESTION': {
      // Prevent reading .answer when currentQuestion is out of range
      if (!state.questions[state.currentQuestion]) {
        return { ...state, showScore: true };
      }
      const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
      const nextIndex = state.currentQuestion + 1;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: nextIndex,
        selectedOption: '',
        showScore: nextIndex === state.questions.length,
        feedback: isCorrect
          ? 'correct'
          : `incorrect|${state.questions[state.currentQuestion].answer}`,
      };
    }

    case 'RESTART_QUIZ':
      return { ...initialState };

    case 'TIMEOUT': {
      // treat as wrong and move next; guard against missing question
      if (!state.questions[state.currentQuestion]) {
        return { ...state, showScore: true };
      }
      const nextIndex = state.currentQuestion + 1;
      return {
        ...state,
        currentQuestion: nextIndex,
        selectedOption: '',
        showScore: nextIndex === state.questions.length,
        feedback: `timeout|${state.questions[state.currentQuestion].answer}`,
      };
    }

    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore, feedback } = state;

  // timer per question
  const TIMER_SECONDS = 10;
  const [secondsLeft, setSecondsLeft] = React.useState(TIMER_SECONDS);
  const timerRef = useRef(null);

  useEffect(() => {
    setSecondsLeft(TIMER_SECONDS);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [currentQuestion]);

  useEffect(() => {
    if (secondsLeft <= 0) {
      clearInterval(timerRef.current);
      dispatch({ type: 'TIMEOUT' });
    }
  }, [secondsLeft]);

  // persist high score
  useEffect(() => {
    if (showScore) {
      const best = Number(localStorage.getItem('bestScore') || '0');
      if (score > best) localStorage.setItem('bestScore', String(score));
    }
  }, [showScore, score]);

  const handleOptionSelect = (option) => dispatch({ type: 'SELECT_OPTION', payload: option });
  const handleNextQuestion = () => {
    clearInterval(timerRef.current);
    dispatch({ type: 'NEXT_QUESTION' });
  };
  const handleRestartQuiz = () => dispatch({ type: 'RESTART_QUIZ' });

  const progress = Math.round(((currentQuestion) / questions.length) * 100);

  return (
    <Container className="mt-4">
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>Your Score: {score} / {questions.length}</h2>
            <p>Best Score: {localStorage.getItem('bestScore') || 0}</p>
            <Button variant="primary" onClick={handleRestartQuiz}>Restart Quiz</Button>
          </div>
        ) : (
          <div>
            <div className="d-flex justify-content-between">
              <div>Question {questions[currentQuestion].id} / {questions.length}</div>
              <div style={{ color: secondsLeft < 5 ? 'red' : 'inherit' }}>{secondsLeft}s</div>
            </div>

            <ProgressBar now={progress} className="my-2" />

            <h4 className="mt-2">{questions[currentQuestion].question}</h4>
            <div className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedOption === option ? 'success' : 'outline-secondary'}
                  className="m-2"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </Button>
              ))}
            </div>

            {/* feedback */}
            {feedback && (
              <div className="mt-3">
                {feedback.startsWith('correct') ? (
                  <div style={{ color: 'green' }}><FaCheckCircle /> Correct! 🎉</div>
                ) : feedback.startsWith('incorrect') ? (
                  <div style={{ color: 'red' }}><FaTimesCircle /> Incorrect! The correct answer is {feedback.split('|')[1]}</div>
                ) : (
                  <div style={{ color: 'orange' }}>Time's up! The correct answer was {feedback.split('|')[1]}</div>
                )}
              </div>
            )}

            <Button
              variant="primary"
              className="mt-3"
              disabled={!selectedOption}
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </Button>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;
