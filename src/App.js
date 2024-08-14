import React, { useState, useEffect } from 'react';
import './App.css';
import PlayerLayout from './components/PlayerLayout';
import paper from './svg/paper.svg';
import rock from './svg/rock.svg';
import scissor from './svg/scissor.svg';
import paperBL from './svg/paperBL.svg';
import rockBL from './svg/rockBL.svg';
import scissorBL from './svg/scissorBL.svg';
import handPl from './svg/handltr.svg';
import handCM from './svg/handrtl.svg';
import CompLayout from './components/CompLayout';
import Buttons from './components/Buttons';

function App() {
   // to get comp's response  
   function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  var isSmallScreen = window.matchMedia && window.matchMedia("screen and (max-width: 768px)").matches;

const [userScore, setUserScore] = useState(0);
const [comScore, setComScore] = useState(0);
const [userChoice, setUserChoice] = useState(0);
const [comInput, setComInput] = useState(null); // State to store computer's choice
const [img, setImg] = useState(handPl);
const [pressed, setPressed] = useState(false);
const [compImg, setCompImg] = useState(handCM);
const [comChoice, setComChoice] = useState(0);
const [play, setPlay] = useState(false);
const comp = {
1: 'rock',
2: 'paper',
3: 'scissors',
};

function handleClick(image, cho){
    if (!pressed){
        setPressed(true);
    } else {
        setPressed(false);
    }
    setImg(image);
    setUserChoice(cho)
}


  useEffect(()=>{
    
     setComChoice(getRandomInteger(1, 3)); // summon com's choice.
    setComInput(comChoice);
      if (comChoice === 1){
        setCompImg(rock);
      } else if (comChoice === 2){
        setCompImg(paper);
      } else if (comChoice === 3){
        setCompImg(scissor);
      }

      // Handle the game logic
      if (userChoice === comChoice) {
        // It's a tie, do nothing
        console.log("It's a tie!");
      } else if (
        (userChoice === 1 && comChoice === 3) || // rock beats scissors
        (userChoice === 2 && comChoice === 1) || // paper beats rock
        (userChoice === 3 && comChoice === 2)    // scissors beat paper
      ) {
        setUserScore(userScore + 1);
      } else if (userChoice > 3){
        // nothing happens (yet)
      }
       else {
        setComScore(comScore + 1);
      }
      

  }, [pressed])


  return (
    <div className=" items-center">
      { play && <>
      <p className=' ml-2 mt-2 text-[1.3rem] sm:text-[2rem] text-[#F4C10E]'>
      USER SCORE: {userScore}
      </p>
    
      <p className=' ml-2 text-[1.3rem] sm:text-[2rem] text-[#F4C10E]'>
      COMPUTER SCORE: {comScore}
      </p>
      <br/>

      <div className=' flex space-x-10'>
        <div className=' sm:left-[10rem] sm:top-[10rem] mt-[5rem] sm:mt-0 relative sm:absolute'>
      <PlayerLayout img={img} setUserChoice = {setUserChoice} isSmallScreen={isSmallScreen} setImg={setImg} setPressed={setPressed} pressed={pressed}/>
      </div>
      <div className=' right-[.3rem] sm:right-[10rem] sm:top-[10rem] mt-[5rem] sm:mt-0 absolute'>
      <CompLayout img={compImg}/>
      </div>
      
      </div>
      {isSmallScreen && <div className='w-full flex justify-center items-center mt-[4rem]'><Buttons img={img} setUserChoice = {setUserChoice} setImg={setImg} setPressed={setPressed} pressed={pressed}/></div>}

      </>
}

{!play && 
<div className=' flex h-[100vh] justify-center items-center'>
<button onClick={()=>{setPlay(true)}} className='  border-[.2rem] p-3 w-[20rem] border-solid border-black rounded text-[3rem] text-[#F4C10E] from-[#3E2545] bg-gradient-to-tr active:scale-90 ease-in-out duration-100'>
  START
</button>
</div>
}
    </div>
  );
}



export default App;
