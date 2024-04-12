import React from 'react'
import './BirthdayLetter.css'
import CountdownTimer from './CountdownTimer'
const BirthdayLetter = () => {
  return (
    <div className='Birthday-Container'>
        <CountdownTimer targetDate="Apr 14, 2024 00:00:00" />
        <h1 className='Birthday-h1'>
            Hey Marelle
        </h1>
        <p className='Birthday-p'>Happy Birthday! 🎉 I just wanted to take a moment to tell you how much I love you. You make every day brighter just by being you, and I’m so lucky to have you in my life.
        I hope your birthday is as amazing as you are. Can’t wait to celebrate it with you and make some more awesome memories together. Here’s to you—my favorite person. Let’s make this year the best one yet.
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
Love you tons,
Sony</p>
<p> PS, I hope you love you all 6 of your gifts</p>
    </div>
  )
}

export default BirthdayLetter