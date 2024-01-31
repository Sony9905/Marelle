import React, {useState} from 'react'
import {JigsawPuzzle} from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import './MonthlyPuzzle.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import puzzleImages from '../Data/puzzleImages';

export const MonthlyPuzzle = () => {
  const [month, setMonth] = useState('December 2023');
  const [image, setImage] = useState(false)
  const setDateValue = (event) => {
    const selectedMonth = event.target.value;
    setMonth(selectedMonth);
  };
  const getRidOfImage = () => {
    setImage(true);
  }
  const getImageBack = () => {
    setImage(false)
  }
  return (
    <div>
    <div className='puzzle-container'>
        <FormControl >
          <InputLabel id="demo-simple-select-label">Choose Puzzle</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={month}
            label="SelectTime"
            onChange={setDateValue}
          >
            <MenuItem value="December 2023">December 2023</MenuItem>
            <MenuItem value="January 2024" >January 2024</MenuItem>
            <MenuItem value="Valentine Day Special 2024" >Valentine Day Special 2024</MenuItem>
            <MenuItem value="February 2024" disabled="true">February 2024</MenuItem>
            <MenuItem value="March 2024" disabled="true">March 2024</MenuItem>
            <MenuItem value="April 2024" disabled="true">April 2024</MenuItem>
            <MenuItem value="May 2024" disabled="true">May 2024</MenuItem>
            <MenuItem value="June 2024" disabled="true">June 2024</MenuItem>
            <MenuItem value="July 2024" disabled="true">July 2024</MenuItem>
            <MenuItem value="August 2024" disabled="true">August 2024</MenuItem>
            <MenuItem value="September 2024" disabled="true">September 2024</MenuItem>
            <MenuItem value="October 2024" disabled="true">October 2024</MenuItem>
            <MenuItem value="November 2024" disabled="true">November 2024</MenuItem>
            <MenuItem value="December 2024" disabled="true">December 2024</MenuItem>
          </Select>
        </FormControl>
        <div className='puzzle-pic-container'>
            <JigsawPuzzle imageSrc={puzzleImages[month]}
                rows={10}
                columns={10}
                onSolved={() => alert("Solved!")}/>
            {image === false? 
            <div className='bool-image'>
                <p>Want to make it harder?</p>
                <button className='raise' onClick={getRidOfImage}>Get rid of image</button>
                <img src={puzzleImages[month]} alt='pic' className='puzzle-pic'/>
            </div> 
            : ''
            }
        </div>
        {image === true? <button className='raise' onClick={getImageBack}>Go back to easy mode</button> : ''}
    </div>
    </div>
  )
}
