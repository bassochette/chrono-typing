import { FunctionComponent, useEffect, useState } from 'react'
import css from './challenge.module.scss';

interface TimerProps {
  startTime: Date;
  endTime?: Date;
}

const toTimestampsInSeconds = (date = new Date()): number => {
  return Math.round(date.getTime() / 1000);
};

const toPaddedString = (n: number): string => n.toString(10).padStart(2, '0');

export const Timer: FunctionComponent<TimerProps> = (props) => {
  const [checked, setChecked] = useState(0);

  let diff = toTimestampsInSeconds(props.endTime) - toTimestampsInSeconds(props.startTime);

  const [minutes, setMinutes] = useState(diff % 60);
  const [seconds, setSeconds] = useState(Math.floor(diff / 60));

  useEffect(() => {
   const i = setInterval(function () {
      diff = toTimestampsInSeconds(props.endTime) - toTimestampsInSeconds(props.startTime);
      setMinutes(Math.floor(diff / 60));
      setSeconds(diff % 60)
      if (!props.endTime) {
        setChecked(checked+1)
      } else {
        clearInterval(i)
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