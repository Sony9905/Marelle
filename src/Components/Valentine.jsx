import React, { useState } from 'react';
import Valentine1 from '../images/Valentine1.jpg'
import Valentine2 from '../images/Valentine2.jpg'
import Valentine3 from '../images/Valentine3.mp4'
import './Valentine.css';
import TypeWriter from "typewriter-effect";
const Valentine = () => {
  const [state, setState] = useState('initial'); // 'initial', 'yes', 'no'
  const [count, setCount] = useState(0);
  const handleYes = () => {
    setState('yes');
    setCount(0);
  };

  const handleNo = () => {
    if(count !== 0) {
        setState('no2');
    }
    else if(count === 0){
        setState('no')
        setCount(count + 1);
    }
    else {
        return null;
    }
  };

  const handleRedo = () => {
    setState('initial');
  };

  const renderContent = () => {
    switch (state) {
      case 'initial':
        return (
          <div className='Valentine'>
            <img src={Valentine1} alt="Initial" />
            <p>Cutie, will you be my Valentine?</p>
            <button className='raise' onClick={handleYes}>Yes</button>
            <button className='raise' onClick={handleNo}>No</button>
          </div>
        );
      case 'yes':
        return (
          <div className='Valentine'>
            <img src={Valentine2} alt="After Yes" />
            <p>Love you Marelle</p>
            <button className='raise' onClick={handleRedo}>Replay</button>
          </div>
        );
      case 'no':
        return (
          <div className='Valentine'>
            <video autoPlay loop muted>
              <source src={Valentine3} type="video/mp4" />
            </video>
            <h1 style={{color: '#8AAAE5'}}>
                <TypeWriter options= {{
                    autoStart:true,
                    loop:true,
                    delay:50,
                    strings: ["WARNING IF YOU ARE READING THIS, YOU ARE IN GRAVE DANGER. THIS IS MARELLE FROM THE FUTURE, I HACKED INTO THE SUPER COMPUTER AND SENT A MESSAGE TO THE PAST. IF YOU CLICK SONTY WILL DIE, SAVE HIM. I ATTACHED A TIME MACHINE BUTTON, QUICKLY, GO BACK IN TIME AND SAVE SONY!"]
                }}
            />
            </h1>
            <button className='raise' onClick={handleRedo}>QUICK GO BACK IN TIME</button>
          </div>
        );
     case 'no2':
        return (
          <div className='Valentine'>
            <video autoPlay loop muted>
              <source src={Valentine3} type="video/mp4" />
            </video>
            <h1 style={{color: '#8AAAE5'}}>
                <TypeWriter options= {{
                    autoStart:true,
                    loop:true,
                    delay:50,
                    strings: ["ARE YOU SERIOUS, YOU'RE GOING TO LET HIM DIE? WHAT IS WRONG WITH THE PAST ME. SONY IS THE BEST PERSON EVER, GO BE HIS VALENTINE FOR CHRIST SAKE"]
                }}
            />
            </h1>
            <button className='raise' onClick={handleRedo}>DON'T BE DUMB, GO BACK IN TIME</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }} className='Valentine'>
      {renderContent()}
    </div>
  );
};

export default Valentine;