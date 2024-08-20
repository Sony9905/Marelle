import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './MonthlyQuiz.css'
import Questions from '../Data/Questions';

const MonthlyQuiz = () => {
  const [month, setMonth] = useState('December 2023');
  const [questions, setQuestions] = useState(Questions[month]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);

  const setDateValue = (event) => {
    const selectedMonth = event.target.value;
    setMonth(selectedMonth);
    setQuestions(Questions[selectedMonth]);
    setCurrentQuestionIndex(0);
    setCorrectCount(0);
    setUserAnswer(null);
  };

  const handleAnswer = (answer) => {
    setUserAnswer(answer);
    const isCorrect = questions[currentQuestionIndex].Answers.find((ans) => ans.text === answer)?.isCorrect;
    setCorrectAnswer(isCorrect);
    if (isCorrect) {
      setCorrectCount((prevCount) => prevCount + 1);
    }
    setAnswered(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setUserAnswer(null);
    setAnswered(false); // Reset the answered state for the next question
  };

  const handleStartOver = () => {
    setCurrentQuestionIndex(0);
    setUserAnswer(null);
    setAnswered(false);
    setCorrectCount(0); // Reset the correct answers count
  };

  const [shuffledChoices, setShuffledChoices] = useState([]);

  useEffect(() => {
    if (questions) {
      const currentQuestion = questions[currentQuestionIndex];
      const choices = currentQuestion.Answers.map(answer => answer.text);
      const shuffled = shuffleArray(choices);
      setShuffledChoices(shuffled);
    }
  }, [questions, currentQuestionIndex]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <div className='Monthly-Quiz-Box'>
      <Box sx={{ minWidth: 120,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
        }}>
        <FormControl >
          <InputLabel id="demo-simple-select-label">Choose Time</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={month}
            label="SelectTime"
            onChange={setDateValue}
          >
            <MenuItem value="December 2023">December 2023</MenuItem>
            <MenuItem value="January 2024" >January 2024</MenuItem>
            <MenuItem value="February 2024" >February 2024</MenuItem>
            <MenuItem value="March 2024" >March 2024</MenuItem>
            <MenuItem value="April 2024" >April 2024</MenuItem>
            <MenuItem value="May 2024" >May 2024</MenuItem>
            <MenuItem value="June 2024" >June 2024</MenuItem>
            <MenuItem value="July 2024" >July 2024</MenuItem>
            <MenuItem value="August 2024" >August 2024</MenuItem>
            <MenuItem value="September 2024" disabled="true">September 2024</MenuItem>
            <MenuItem value="October 2024" disabled="true">October 2024</MenuItem>
            <MenuItem value="November 2024" disabled="true">November 2024</MenuItem>
            <MenuItem value="December 2024" disabled="true">December 2024</MenuItem>
          </Select>
        </FormControl>
        <div class="all-wrap">  
        <div class="all">
        <div class="yarn"></div>
        <div class="cat-wrap">    
        <div class="cat">
        <div class="cat-upper">
        <div class="cat-leg"></div>
        <div class="cat-leg"></div>
        <div class="cat-head">
        <div class="cat-ears">
        <div class="cat-ear"></div>
        <div class="cat-ear"></div>
        </div>
        <div class="cat-face">
        <div class="cat-eyes"></div>
        <div class="cat-mouth"></div>
        <div class="cat-whiskers"></div>
        </div>
        </div>
        </div>
        <div class="cat-lower-wrap">
        <div class="cat-lower">
        <div class="cat-leg">
        <div class="cat-leg">
        <div class="cat-leg">
        <div class="cat-leg">
        <div class="cat-leg">
        <div class="cat-leg">
        <div class="cat-leg">
          <div class="cat-leg">
            <div class="cat-leg">
              <div class="cat-leg">
                <div class="cat-leg">
                  <div class="cat-leg">
                    <div class="cat-leg">
                      <div class="cat-leg">
                        <div class="cat-leg">
                          <div class="cat-leg">
                            <div class="cat-paw"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="cat-leg">
        <div class="cat-leg">
        <div class="cat-leg">
        <div class="cat-leg">
        <div class="cat-leg">
        <div class="cat-leg">
        <div class="cat-leg">
          <div class="cat-leg">
            <div class="cat-leg">
              <div class="cat-leg">
                <div class="cat-leg">
                  <div class="cat-leg">
                    <div class="cat-leg">
                      <div class="cat-leg">
                        <div class="cat-leg">
                          <div class="cat-leg">
                            <div class="cat-paw"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="cat-tail">
        <div class="cat-tail">
        <div class="cat-tail">
        <div class="cat-tail">
        <div class="cat-tail">
        <div class="cat-tail">
        <div class="cat-tail">
          <div class="cat-tail">
            <div class="cat-tail">
              <div class="cat-tail">
                <div class="cat-tail">
                  <div class="cat-tail">
                    <div class="cat-tail">
                      <div class="cat-tail">
                        <div class="cat-tail">
                          <div class="cat-tail -end"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        {questions && (
          <div>
            {correctCount === questions.length? <h1>You got a full score for {month} </h1>: <h1>You have {correctCount} correct.</h1>}
            <h3>Question {currentQuestionIndex + 1}:</h3>
            <p>{questions[currentQuestionIndex].Question}</p>
            {shuffledChoices.map((choice, index) => (
              <button
              className={`raise${answered && choice === userAnswer ? (correctAnswer ? '-correct' : '-incorrect') : ''}`}
                key={index}
                onClick={() => handleAnswer(choice)}
                disabled = {answered === false? false : true}
              >
                {choice}
              </button>
            ))}
            {userAnswer && (
          <>
            <img className="quiz-image"
              src={questions[currentQuestionIndex].Answers.find((answer) => answer.text === userAnswer).image}
              alt={`${userAnswer}`}
            />
            <p>
              {answered
                ? correctAnswer
                  ? 'Correct! ' + questions[currentQuestionIndex].Answers.find((answer) => answer.text === userAnswer).feedback
                  : 'Wrong Answer ' + questions[currentQuestionIndex].Answers.find((answer) => answer.text === userAnswer).feedback
                : ''}
            </p>
          </>
        )}
            <div>
            <button
                className='raise'
                onClick={handleStartOver}
              >
                Start Over
              </button>
              {currentQuestionIndex < questions.length - 1 && (
                <button className='raise' onClick={handleNextQuestion}>
                  Next Question
                </button>
              )}
            </div>
          </div>
        )}
      </Box>
    </div>
  );
};

export default MonthlyQuiz;
