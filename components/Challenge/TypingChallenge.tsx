import { FunctionComponent, useState } from 'react'
import { sample } from 'lodash';

import css from './challenge.module.scss'
import { challenges } from '../../data/challenges';
import { Timer } from './Timer'
import { Statement } from './Statement'
import { Answer } from './Answer'

export const TypingChallenge: FunctionComponent = () => {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState<Date | undefined>();
  const [challenge, setChallenge] = useState(sample(challenges));


  const onSuccess = (strokes: number) => {
    setEndTime(new Date());
  }

  if (!challenge) return <div> loading </div>;

  return (<div className={css.typingChallenge}>
    <Timer startTime={startTime} endTime={endTime}/>
    <Statement challenge={challenge} />
    <Answer challenge={challenge} onSuccess={onSuccess} />
  </div>);
};