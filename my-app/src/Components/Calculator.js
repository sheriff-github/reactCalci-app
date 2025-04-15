import React from 'react'
import './Calculator.css';


const Calculator = () => {
  return (
    <center>
    <div className='container'>
        <div>
            <input placeholder='0' />
        </div>

        <button value="Ac">Ac</button>
        <button value="%">%</button>
        <button value="&#8592;">&#8592;</button>
        <button value="/">/</button>
        <br></br>



        <button value="7">7</button>
        <button value="8">8</button>
        <button value="9">9</button>
        <button value="*">*</button>
        <br></br>

        <button value="4">4</button>
        <button value="5">5</button>
        <button value="6">6</button>
        <button value="-">-</button>
        <br></br>

        <button value="1">1</button>
        <button value="2">2</button>
        <button value="3">3</button>
        <button value="+">+</button>
        <br></br>


        <button value="00">00</button>
        <button value="0">0</button>
        <button value=".">.</button>
        <button value="=" className='equal'>=</button>
        <br></br>
        <br></br>


    </div>
    </center>
    
  )
}

export default Calculator