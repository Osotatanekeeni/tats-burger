import React from 'react'

export default function Lettuce({ color }) {
    const style = {
        background: color,
        height: '5vh',
        color: 'white',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px',
    }
  return (
    <div style={style}>Lettuce</div>
  )
}
