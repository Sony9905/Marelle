import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './MonthlyQuiz.css'
const MonthlyQuiz = () => {
  const Questions = {
    December2023: [
      {
        Question: "When did we start dating?",
        Answers: [{
            text: "December 9th 10:27AM",
            isCorrect: true,
            image: 'https://i.pinimg.com/originals/70/11/4d/70114d826b655dc2e039fd1cf4ead227.gif',
            feedback: "This one was a semi hard one, I'm proud you got this right, unless you got it wrong the first time. Then I am slightly upset."
        },
        {
            text: "December 9th 10:29AM",
            isCorrect: false,
            image: 'https://media0.giphy.com/media/SHdwS47nztG2MHCOTH/200w.gif?cid=6c09b952lb4kb5dwwobysm0aoko81ncasqoykibqfy9w3u6l&ep=v1_gifs_search&rid=200w.gif&ct=g',
            feedback: "Ooooof so close, try again cutie."
        },{
            text: "December 11th 10:29AM",
            isCorrect: false,
            image: 'https://i.pinimg.com/originals/f3/78/4d/f3784dc54de78b85eac662dc55ba64aa.gif',
            feedback: "Bruh"
        },
        {
            text: "December 11th 10:27AM",
            isCorrect: false,
            image: 'https://media.tenor.com/TEC6z0acIbUAAAAj/cute-bears-love.gif',
            feedback: "Seriously?????? The 11th????????????"
        }]
      },
      {
        Question: "Who made the first move?",
        Answers: [{
            text: "Sony",
            isCorrect: true,
            image: 'https://i.pinimg.com/originals/70/11/4d/70114d826b655dc2e039fd1cf4ead227.gif',
            feedback: "Sorry cutie, but it was me"
        },
        {
            text: "Marelle",
            isCorrect: false,
            image: 'https://i.pinimg.com/originals/97/b3/ad/97b3ad13ba06c17de5cef18a4f386d19.gif',
            feedback: "LMFAOOOO YOU WISH IT WAS YOU HUH"
        },{
            text: "Misty",
            isCorrect: false,
            image: 'https://i.pinimg.com/originals/60/4c/fc/604cfcfa429f720c9a696f52829f684d.gif',
            feedback: "Technically also right"
        },
        {
            text: "God",
            isCorrect: false,
            image: 'https://media2.giphy.com/media/yN9oaPiszcoLYAc4Ar/200w.gif?cid=6c09b952j0ypzkbtotwiss33c6wjsgeh01eherdka8tufbh9&ep=v1_gifs_search&rid=200w.gif&ct=g',
            feedback: "I don't know what to say"
        }]
      },
      {
        Question: "The first time I came to Montreal, where did you take me for date night?",
        Answers: [{
            text: "Yokato Yokabai",
            isCorrect: true,
            image: 'https://media.tenor.com/7SSK-Y2kkuEAAAAj/sweet.gif',
            feedback: "Holy shit, good memory babe!"
        },
        {
            text: "Kento Ramen",
            isCorrect: false,
            image: 'https://media0.giphy.com/media/SHdwS47nztG2MHCOTH/200w.gif?cid=6c09b952lb4kb5dwwobysm0aoko81ncasqoykibqfy9w3u6l&ep=v1_gifs_search&rid=200w.gif&ct=g',
            feedback: "Not even close"
        },{
            text: "Bento Yokobai",
            isCorrect: false,
            image: 'https://i.pinimg.com/originals/f3/78/4d/f3784dc54de78b85eac662dc55ba64aa.gif',
            feedback: "Good guess cutie, but nope"
        },
        {
            text: "Yokato Ramen",
            isCorrect: false,
            image: 'https://i.pinimg.com/originals/0c/6c/27/0c6c27554d838a0cd53c4d10dd0313f5.gif',
            feedback: "HONESTLY I WOULD OF CHOSE THIS ONE TOOO"
        }]
      },
      {
        Question: "What was the first gift I gave to you?",
        Answers: [{
            text: "Tommy Hilfiger Scarf",
            isCorrect: true,
            image: 'https://i.pinimg.com/originals/70/11/4d/70114d826b655dc2e039fd1cf4ead227.gif',
            feedback: "YAAAAAAAAAY, I KNEW MY CUTIE WAS SO SMART"
        },
        {
            text: "Dino Keychain",
            isCorrect: false,
            image: 'https://i.pinimg.com/originals/0c/6c/27/0c6c27554d838a0cd53c4d10dd0313f5.gif',
            feedback: "Sorry cutie, this was the last one I gave you on our first date."
        },{
            text: "JJK Pins",
            isCorrect: false,
            image: 'https://i.pinimg.com/originals/ee/a1/43/eea143ba06f716e3b44ff5bb26d5e0d5.gif',
            feedback: "If you chose this, just say you don't love me or my gifts."
        },
        {
            text: "Calvin Klein Scarf",
            isCorrect: false,
            image: 'https://i.pinimg.com/originals/4d/8f/21/4d8f216c3333e6538eaef085ac4bdf45.gif',
            feedback: "Seriously?????? THERE IS A H ON THE SCARF MADAM"
        }]
      },
      {
        Question: "What did we order before ice skating in Bryant Park?",
        Answers: [{
            text: "Mint and Vanilla Hot Chocolate",
            isCorrect: true,
            image: 'https://media.tenor.com/7SSK-Y2kkuEAAAAj/sweet.gif',
            feedback: "You had an upset tummy right after and yours didnt even have any Vanilla LMAO. "
        },
        {
            text: "Mint and Regular Hot Chocolate",
            isCorrect: false,
            image: 'https://media0.giphy.com/media/SHdwS47nztG2MHCOTH/200w.gif?cid=6c09b952lb4kb5dwwobysm0aoko81ncasqoykibqfy9w3u6l&ep=v1_gifs_search&rid=200w.gif&ct=g',
            feedback: "Ooooof so close, try again cutie."
        },{
            text: "Cookies and cream ice cream",
            isCorrect: false,
            image: 'https://i.pinimg.com/originals/f3/78/4d/f3784dc54de78b85eac662dc55ba64aa.gif',
            feedback: "This was dessert cutie, try again"
        },
        {
            text: "Vanilla Ice Cream",
            isCorrect: false,
            image: 'https://i.pinimg.com/originals/4d/8f/21/4d8f216c3333e6538eaef085ac4bdf45.gif',
            feedback: "Nah you are waaaaay off."
        }]
      },
      {
        Question: "Which KDrama did we spend 2 nights binging?",
        Answers: [{
            text: "The Glory",
            isCorrect: true,
            image: 'https://i.pinimg.com/originals/70/11/4d/70114d826b655dc2e039fd1cf4ead227.gif',
            feedback: "You were persistent on this Kdrama, you better have remembered."
        },
        {
            text: "Bad Guys",
            isCorrect: false,
            image: 'https://media0.giphy.com/media/SHdwS47nztG2MHCOTH/200w.gif?cid=6c09b952lb4kb5dwwobysm0aoko81ncasqoykibqfy9w3u6l&ep=v1_gifs_search&rid=200w.gif&ct=g',
            feedback: "This was all action and men, way off cutie"
        },{
            text: "Itawon Class",
            isCorrect: false,
            image: 'https://i.pinimg.com/originals/f3/78/4d/f3784dc54de78b85eac662dc55ba64aa.gif',
            feedback: "You said no to this like 50 times, if you chose this, you really have bad memory cutie. "
        },
        {
            text: "Middle School Revenge",
            isCorrect: false,
            image: 'https://i.pinimg.com/originals/0c/6c/27/0c6c27554d838a0cd53c4d10dd0313f5.gif',
            feedback: "???????? I made this up just saying"
        }]
      },
      {
        Question: "Which is the correct order of winners in Mario Kart? left to right, first to last",
        Answers: [{
            text: "Marelle, Adonis, Zeng, Sony",
            isCorrect: true,
            image: 'https://i.pinimg.com/originals/06/b3/02/06b302f888e03fe4f505ccb049b5478c.gif',
            feedback: "Yeah yeah, go to the next question before I go next irl. "
        },
        {
            text: "Sony, Marelle, Adonis, Zeng",
            isCorrect: false,
            image: 'https://i.pinimg.com/originals/ca/52/0f/ca520fbaa1cf8d75a52b676c220b4ca7.gif',
            feedback: "I wish this was true"
        },{
            text: "Marelle, Adonis, Sony, Zeng",
            isCorrect: false,
            image: 'https://i.pinimg.com/originals/06/b3/02/06b302f888e03fe4f505ccb049b5478c.gif',
            feedback: "I couldnt even go third."
        },
        {
            text: "Marelle, Sony, Adonis, Zeng",
            isCorrect: false,
            image: 'https://media.tenor.com/TEC6z0acIbUAAAAj/cute-bears-love.gif',
            feedback: "PLEASE LET THIS ONE BE TRUE. PLEASE GOD"
        }]
      },
      {
        Question: "How much did Zeng give you when you bought him beer at the store?",
        Answers: [{
            text: "20 dollars",
            isCorrect: true,
            image: 'https://i.pinimg.com/originals/70/11/4d/70114d826b655dc2e039fd1cf4ead227.gif',
            feedback: "Good memory! I remembered you said US money looks like monopoly money lol."
        },
        {
            text: "10 dollars",
            isCorrect: false,
            image: 'https://media0.giphy.com/media/SHdwS47nztG2MHCOTH/200w.gif?cid=6c09b952lb4kb5dwwobysm0aoko81ncasqoykibqfy9w3u6l&ep=v1_gifs_search&rid=200w.gif&ct=g',
            feedback: "Ooooof so close, try again cutie."
        },{
            text: "5 dollars",
            isCorrect: false,
            image: 'https://i.pinimg.com/originals/f3/78/4d/f3784dc54de78b85eac662dc55ba64aa.gif',
            feedback: "Good guess considering you had a 5 dollar canadian bill."
        },
        {
            text: "50 dollars",
            isCorrect: false,
            image: 'https://media.tenor.com/TEC6z0acIbUAAAAj/cute-bears-love.gif',
            feedback: "Nice try cutie, but we ain't that rich."
        }]
      },
      {
        Question: "What was the first meal we cooked together?",
        Answers: [{
            text: "Chicken Alfredo",
            isCorrect: true,
            image: 'https://i.pinimg.com/originals/70/11/4d/70114d826b655dc2e039fd1cf4ead227.gif',
            feedback: "I'd be upset if you didn't get this right considering you ate this two times already."
        },
        {
            text: "Eggs",
            isCorrect: false,
            image: 'https://media0.giphy.com/media/SHdwS47nztG2MHCOTH/200w.gif?cid=6c09b952lb4kb5dwwobysm0aoko81ncasqoykibqfy9w3u6l&ep=v1_gifs_search&rid=200w.gif&ct=g',
            feedback: "You would be right but this wasn't together since I made the eggs LMFAOOOO"
        },{
            text: "Bread and Butter",
            isCorrect: false,
            image: 'https://cdn.svgator.com/images/2022/07/cute-animated-cat-tutorial.gif',
            feedback: "Good guess, but we technically never made it together"
        },
        {
            text: "Butter and Cheese Chicken",
            isCorrect: false,
            image: 'https://i.pinimg.com/originals/4d/8f/21/4d8f216c3333e6538eaef085ac4bdf45.gif',
            feedback: "What the fuck even is this"
        }]
      },
      {
        Question: "What was the date of our brunch with Sola, Anthony, Ken, and Safia",
        Answers: [{
            text: "January 1st",
            isCorrect: true,
            image: 'https://i.pinimg.com/originals/70/11/4d/70114d826b655dc2e039fd1cf4ead227.gif',
            feedback: "Going to be honest cutie, I thought it was the second but it was the first, thankfully I had a photo saved with the timestamp. Cutie is so smart <3"
        },
        {
            text: "January 2nd",
            isCorrect: false,
            image: 'https://media0.giphy.com/media/SHdwS47nztG2MHCOTH/200w.gif?cid=6c09b952lb4kb5dwwobysm0aoko81ncasqoykibqfy9w3u6l&ep=v1_gifs_search&rid=200w.gif&ct=g',
            feedback: "Ooooof so close, try again cutie."
        },{
            text: "December 31st",
            isCorrect: false,
            image: 'https://i.pinimg.com/originals/f3/78/4d/f3784dc54de78b85eac662dc55ba64aa.gif',
            feedback: "This was way offf, we were watching the Glory that we forgot to kiss exactly at new year LOL."
        },
        {
            text: "We were late and didn't go",
            isCorrect: false,
            image: 'https://i.pinimg.com/originals/de/d2/b8/ded2b8c526e192d56630e87eed03a514.gif',
            feedback: "We were bunnies yes, but we still went! "
        }]
      },
    ],
  };
  
  
  const [month, setMonth] = useState('December2023');
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

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setUserAnswer(null);
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
            <MenuItem value="December2023">December 2023</MenuItem>
            <MenuItem value="January2024" disabled="true">January 2024</MenuItem>
            <MenuItem value="February2024" disabled="true">February 2024</MenuItem>
            <MenuItem value="March2024" disabled="true">March 2024</MenuItem>
            <MenuItem value="April2024" disabled="true">April 2024</MenuItem>
            <MenuItem value="May2024" disabled="true">May 2024</MenuItem>
            <MenuItem value="June2024" disabled="true">June 2024</MenuItem>
            <MenuItem value="July2024" disabled="true">July 2024</MenuItem>
            <MenuItem value="August2024" disabled="true">August 2024</MenuItem>
            <MenuItem value="September2024" disabled="true">September 2024</MenuItem>
            <MenuItem value="October2024" disabled="true">October 2024</MenuItem>
            <MenuItem value="November2024" disabled="true">November 2024</MenuItem>
            <MenuItem value="December2024" disabled="true">December 2024</MenuItem>
          </Select>
        </FormControl>
        {questions && (
          <div>
            <h1>You have {correctCount} correct</h1>
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
            <img
              src={questions[currentQuestionIndex].Answers.find((answer) => answer.text === userAnswer).image}
              alt={`${userAnswer} Image`}
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
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Previous Question
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
