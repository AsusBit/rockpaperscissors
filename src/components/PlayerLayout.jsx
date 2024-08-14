import paper from '../svg/paper.svg';
import rock from '../svg/rock.svg';
import scissor from '../svg/scissor.svg';
import paperBL from '../svg/paperBL.svg';
import rockBL from '../svg/rockBL.svg';
import scissorBL from '../svg/scissorBL.svg';
import handPl from '../svg/handltr.svg';
import { useState, useEffect} from 'react';

// snippet yellow: #F4C10E
// snippet bright purple: #9A5CAB
// snippet purple: #3E2545


export default function PlayerLayout({img, setImg, pressed, setPressed, setUserChoice, isSmallScreen}){
    
    
    function handleClick(image, cho){
        if (!pressed){
            setPressed(true);
        } else {
            setPressed(false);
        }
        setImg(image);
        setUserChoice(cho)
    }
    const btnStyle = 'flex justify-center items-center rounded w-[5rem] sm:w-[6rem] h-[5rem] sm:h-[6rem] bg-[#F4C10E] border-black border-solid border-[3px] p-3 active:scale-[.9] ease-in-out duration-100'
    return(
        <div className=' justify-center grid'>
            <div className='flex justify-center items-center'>
            <p className=' text-white text-[1.3rem] sm:text-[3rem]'>
                PLAYER
            </p>
            </div>
            <div className='flex justify-center items-center  sm:relative right'>
            <img alt={toString(img)}  className=' w-[10rem] sm:w-[300px]' src={img}></img>
            </div>
            {!isSmallScreen && <div className=' flex space-x-5 sm:space-x-10 absolute sm:relative align-middle '>

<button className={btnStyle} onClick={()=>{handleClick(rock, 1)}}>
    <img src={rock} alt='rock'></img>
</button>

<button className={btnStyle} onClick={()=>{handleClick(paper, 2) }}>
<img src={paper} alt='paper'></img>
</button>

<button className={btnStyle} onClick={()=>{handleClick(scissor, 3) }}>
<img src={scissor} alt='scissors'></img>
</button>

</div>}
            
        </div>
    )
}