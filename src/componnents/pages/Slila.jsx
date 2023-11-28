
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
  return (
    <>
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={false} // default false
        // isFlipped={false}
        flipDirection="vertical"
        ref={ref}
        className="custom-flippy mt-5 bg-light rounded bg-opacity-50"
        style={{ width: '100%', height: '600px' }}
      >
        <FrontSide>
          {props.details}
          <button onClick={() => { ref.current.toggle(); }} className='btn btn-success'> Commander </button>
          <br />
          <hr />
          <div className='Slila'>
            <img src={LaSlilafrom} alt="" className=' lgouffa' />
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

    </>
  );
}

export default Slila;
