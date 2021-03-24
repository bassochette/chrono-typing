import { FunctionComponent, useState } from 'react'
import { sample } from 'lodash';

import css from './challenge.module.scss'
import { challenges } from '../../data/challenges';
import { Timer } from './Timer'
import { Statement } from './Statement'
import { Answer } from './Answer'
import { Success } from './Success'
import { HistoryGraph } from './HistoryGraph'

const newChallenge = () => sample(challenges)

export const TypingChallenge: FunctionComponent = () => {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState<Date | undefined>();
  const [challenge, setChallenge] = useState(newChallenge());
  const [success, setSuccess] = useState(false);
  const [strokes, setStrokes] = useState(0);

  const onSuccess = (_strokes: number) => {
    setStrokes(_strokes)
    setEndTime(new Date());
    setSuccess(true);
  }

  const next = () => {
    setChallenge(newChallenge());
    setStrokes(0);
    setEndTime(undefined);
    setSuccess(false);
    setStartTime(new Date());
  }

  if (!challenge) return <div> loading </div>;

  return (<div className={css.typingChallenge}>
    <Timer startTime={startTime} endTime={endTime} challenge={challenge}/>
    <Statement challenge={challenge} />
    {!success && <Answer challenge={challenge} onSuccess={onSuccess} />}
    {success && <Success startTime={startTime} endTime={endTime}
                         challenge={challenge} strokes={strokes}
                         next={next}
    />}
    {success && <HistoryGraph  refresh={success} />}
  </div>);
};