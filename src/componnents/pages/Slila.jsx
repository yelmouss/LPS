
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
        flipOnHover={false}
        // flipOnClick={false}
        // isFlipped={undefined}
        flipDirection="vertical"
        ref={ref}
        className="custom-flippy mt-5 bg-dark rounded bg-opacity-50"
        onMouseEnter={handleMouseEnter}
      >
        <FrontSide>
          {props.details}
          <div className='Slila'>
            <img src={LaSlilafrom} alt="" className='img-fluid lgouffa' />
            <img src={props.t9edia} alt="" className='img t9edia' />
          </div>
          <br />
          <br />
        </FrontSide>
        <BackSide>
          <Card>

            <div className="card-footer">
              {props.comande}
            </div>
          </Card>

        </BackSide>
      </Flippy>
    </>
  );
}

export default Slila;
