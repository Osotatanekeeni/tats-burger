import React from 'react'

export default function Meat({ color }) {

    const style = {
        background: color,
        height: '5vh',
        color: 'white',
        marginBottom: '5px',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px',
    }
  return (
    <div style={style}>Meat</div>
  )
}
