import React from 'react'
import BaseBread from './BaseBread'
import Lettuce from './Lettuce'
import Meat from './Meat'
import Tomato from './Tomato'
import TopBread from './TopBread'
import '../styles/Burger.css'

export default function Burger({tomato, meat, lettuce}) {

  return (
    <div className='burger'>

        <TopBread />
        {/* { !tomato && !meat && !lettuce && <br></br> } */}
        {tomato && <Tomato color="red"/>}
        {meat && <Meat color="brown"/>}
        {lettuce && <Lettuce color="green"/> }
        <BaseBread />

    </div>
  )
}
