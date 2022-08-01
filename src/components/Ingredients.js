import React, { useState } from 'react'
import Burger from './Burger';
import '../styles/Ingredients.css'

export default function Ingredients() {

    function handleTomatoClick() {
        setTomatoIsChecked(!tomatoIsChecked);
    }

    function handleMeatClick() {
        setMeatIsChecked(!meatIsChecked);
    }

    function handleLettuceClick() {
        setLettuceIsChecked(!lettuceIsChecked);
    }

    const [tomatoIsChecked, setTomatoIsChecked] = useState(false);
    const [meatIsChecked, setMeatIsChecked] = useState(false);
    const [lettuceIsChecked, setLettuceIsChecked] = useState(false);
    const [createBurger, setCreateBurger] = useState(false);


    function handleCreateBurger() {
        setCreateBurger(true);
    }
  return (
    <div className='list'>
    <label>
      <input type="checkbox" checked={tomatoIsChecked} onChange={handleTomatoClick}/>
      Tomato
    </label>
    <label>
      <input type="checkbox" checked={meatIsChecked} onChange={handleMeatClick} />
      Meat
    </label>

    <label>
      <input type="checkbox" checked={lettuceIsChecked} onChange={handleLettuceClick} />
      Lettuce
    </label>

    
    {/* {tomatoIsChecked || meatIsChecked || lettuceIsChecked ? 
        <div className='burgerButton'>
            <br></br>
            <button onClick={handleCreateBurger}>Create Burger</button> 
        </div>
    :   <div className='burgerButton'>
            <br></br>
            <button onClick={handleCreateBurger}>Eat Only Bread</button> 
        </div>
    } */}



    {/* {createBurger ? <Burger tomato={tomatoIsChecked} meat={meatIsChecked} lettuce={lettuceIsChecked} createBurger={createBurger} /> : null} */}

    <Burger tomato={tomatoIsChecked} meat={meatIsChecked} lettuce={lettuceIsChecked} createBurger={createBurger} />
    </div>
  )
}
