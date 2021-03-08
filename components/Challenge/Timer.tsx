import { FunctionComponent, useEffect, useState } from 'react'
import css from './challenge.module.scss';
import { Challenge } from '../../data/IChallenge'

interface TimerProps {
  startTime: Date;
  endTime?: Date;
  challenge: Challenge;
}

const toTimestampsInSeconds = (date = new Date()): number => {
  return Math.round(date.getTime() / 1000);
};

const toPaddedString = (n: number): string => n.toString(10).padStart(2, '0');

export const timeDiffInSeconds = (start: Date, end: Date) => toTimestampsInSeconds(end) - toTimestampsInSeconds(start);

export const Timer: FunctionComponent<TimerProps> = (props) => {
  const [checked, setChecked] = useState(0);

  let diff = timeDiffInSeconds(props.startTime, props.endTime);

  const [minutes, setMinutes] = useState(diff % 60);
  const [seconds, setSeconds] = useState(Math.floor(diff / 60));

  useEffect(() => {
   const i = setInterval(function () {
      diff = toTimestampsInSeconds(props.endTime) - toTimestampsInSeconds(props.startTime);
      setMinutes(Math.floor(diff / 60));
      setSeconds(diff % 60)
      if (!props.endTime) {
        setChecked(checked+1)
      }
    }, 100)
    return () => clearInterval(i)
  }, [checked])

  return (
    <section className={`${css.section} ${css.timer}`}>
      {toPaddedString(minutes)}:{toPaddedString(seconds)}
    </section>
  )
}