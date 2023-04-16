
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FlipMove from 'react-flip-move';


const CountdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CountdownItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;

const CountdownItemValue = styled.span`
  background-color: rgba(1,1,1,0.5) ;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
`;

const CountdownItemLabel = styled.span`
  margin-top: 0.5rem;
`;

const Countdown = ({  }) => {
  const deadline = new Date("August 10, 2023 19:30:00").getTime();
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  const calculateTimeLeft = () => {
    const difference = deadline - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setDays(timeLeft.days);
      setHours(timeLeft.hours);
      setMinutes(timeLeft.minutes);
      setSeconds(timeLeft.seconds);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <CountdownWrapper>
      <CountdownItemWrapper>
      <FlipMove>
        <CountdownItemValue>{days}</CountdownItemValue>
        </FlipMove>
        <CountdownItemLabel>Días</CountdownItemLabel>
      </CountdownItemWrapper>
      <CountdownItemWrapper>
        <FlipMove>
        <CountdownItemValue>{hours}</CountdownItemValue>
        </FlipMove>
        <CountdownItemLabel>Horas</CountdownItemLabel>
      </CountdownItemWrapper>
      <CountdownItemWrapper>
      <FlipMove >
        <CountdownItemValue>{minutes}</CountdownItemValue>
        </FlipMove >
        <CountdownItemLabel>Minutos</CountdownItemLabel>
      </CountdownItemWrapper>
      <CountdownItemWrapper>
        <FlipMove  duration={900} delay={0}>
          <CountdownItemValue key={seconds}>{seconds}</CountdownItemValue>
        </FlipMove>
        <CountdownItemLabel>Segundos</CountdownItemLabel>
      </CountdownItemWrapper>
    </CountdownWrapper>
  );
};

export default Countdown;

