// you have to help me create calculator component, dont write me the code  , just guide me comments , if i stuck somewhere comment on what should i do next 
// what should i import her
import React from 'react';
import {useState} from 'react'
import DigitButton from './DigitButton';
import OperatorButton from './OperatorButton';

export default function calculator(){
    // 1. Create a new component called Calculator
    // 2. Create a new state variable called result
    const [result , setResult]  = useState('');
    // what is next ?
    const handleClick = (e:Event) =>{
        e.preventDefault();
        // 4. Create a new function called handleClick that updates the result state
        // 5. The handleClick function should accept a digit or operator as an argument
        setResult(result.concat(e.target.value))
        // 6. The handleClick function should update the result state based on the digit or operator passed
        // 7. The handleClick function should be passed as a prop to the DigitButton and OperatorButton components
        // 8. The handleClick function should handle the logic for updating the result state based on the digit or operator clicked
    }

    const evaluate = () =>{
        const equals  = eval(result);
        setResult(equals);

    }


    return(

        <>
            <   ></>

            // 3. Import the DigitButton and OperatorButton components
            <div className='flex flex-col gap-4'>        
            <DigitButton digit={1} onClick={()=>handleClick}></DigitButton>
            <DigitButton  digit={2} onClick={()=>handleClick} ></DigitButton>
            <DigitButton  digit={3} onClick={()=> handleClick}></DigitButton>
            </div>

            <div className='flex flex-col gap-4'>        
            <DigitButton digit={4} onClick={()=>handleClick}></DigitButton>
            <DigitButton  digit={5} onClick={()=>handleClick} ></DigitButton>
            <DigitButton  digit={6} onClick={()=> handleClick}></DigitButton>
            </div>

            <div className='flex flex-col gap-4'>        
            <DigitButton digit={7} onClick={()=>handleClick}></DigitButton>
            <DigitButton  digit={8} onClick={()=>handleClick} ></DigitButton>
            <DigitButton  digit={9} onClick={()=> handleClick}></DigitButton>
            </div>

            <div className='flex flex-col gap-4'>        
            <OperatorButton operator={'+'} onClick={()=>handleClick}/>
            <OperatorButton operator={"-"} onClick={()=>handleClick}/>
            <OperatorButton operator={'*'} onClick={()=>handleClick}/>
            </div>
        
        </>
    )
    

}