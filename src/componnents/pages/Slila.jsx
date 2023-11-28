
import LaSlilafrom from '../../lgouffa.png'
import React, { useRef } from 'react';
import { Card } from 'react-bootstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const getRandomFlipDirection = () => {
  const directions = ['horizontal', 'vertical'];
  const randomIndex = Math.floor(Math.random() * directions.length);
  return directions[randomIndex];
};

function Slila(props) {
  const ref = useRef();
  const handleMouseEnter = () => {
    const randomFlipDirection = getRandomFlipDirection();
    ref.current.toggle(randomFlipDirection);
  };

  return (
    <>
      <Flippy
      flipOnHover={false} // default false
        flipOnClick={false} // default false
        // isFlipped={false}
        flipDirection="vertical"
        ref={ref}
        className="custom-flippy mt-5 bg-dark rounded bg-opacity-50"
        style={{ width:'250px', height: '100%' }}
      >
        <FrontSide>
          {props.details}
          <button onClick={() => { ref.current.toggle(); }} className='btn btn-success'> Commander </button>
          <br />
          <hr />
          <div className='Slila'>
            <img src={LaSlilafrom} alt="" className='img-fluid lgouffa' />
            <img src={props.t9edia} alt="" className='img t9edia' />
          </div>
          <br />
          <br />
     

        </FrontSide>
        <BackSide className={"d-flex align-items-center flex-column justify-content-center"}>
          <Card>

            <div className="card-footer">
              {props.comande}
            </div>
          </Card>
          <button onClick={() => { ref.current.toggle(); }} className='btn mt-5 btn-light'> X </button>

        </BackSide>
      </Flippy>

      {/* <Flippy
      flipOnHover={false} // default false
      flipOnClick={false} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
  >
    <FrontSide style={{ backgroundColor: '#41669d'}} >
      RICK <br />
      <button onClick={() => { ref.current.toggle(); }}> Toggle via button</button>
    </FrontSide>
    <BackSide style={{ backgroundColor: '#175852'}}>
      ROCKS

      <button>bb</button>
    </BackSide>
  </Flippy> */}
    </>
  );
}

export default Slila;
