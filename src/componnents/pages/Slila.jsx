import React from 'react'
import LaSlilafrom from  '../../lgouffa.png'
import Maticha from  '../../citrons-bio.webp'

function Slila(props) {
  return (
    <div className='Slila mt-5'>
        <img src={LaSlilafrom} alt="" className='img-fluid lgouffa mt-5' />
        <img src={props.t9edia} alt="" className='img t9edia' />

       {props.comande}
    </div>
  )
}

export default Slila