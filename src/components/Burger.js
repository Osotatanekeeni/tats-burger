import React from 'react'
import BaseBread from './BaseBread'
import Lettuce from './Lettuce'
import Meat from './Meat'
import Tomato from './Tomato'
import TopBread from './TopBread'
import '../styles/Burger.css'

export default function Burger({tomato, meat, lettuce, createBurger}) {

    console.log("what is create burger ", createBurger)
  return (
    <div className='burger'>

        <TopBread />
        {tomato && <Tomato />}
        {meat && <Meat />}
        {lettuce && <Lettuce/> }
        <BaseBread />

    </div>
  )
}
