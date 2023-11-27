import React from 'react'
import LaSlilafrom from  '../../lgouffa.png'
import Maticha from  '../../citrons-bio.webp'

function Slila(props) {
  return (
    <div className='Slila'>
        <img src={LaSlilafrom} alt="" className='img-fluid lgouffa' />
        <img src={props.t9edia} alt="" className='img t9edia' />

       {props.comande}
    </div>
  )
}

export default Slila