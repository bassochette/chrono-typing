import { FunctionComponent } from 'react'

import css from './challenge.module.scss';
import { Challenge } from '../../data/IChallenge'
import { timeDiffInSeconds } from './Timer'
import { addResult } from '../../storage/ChallengeResult'

interface SuccessProps {
  startTime: Date;
  endTime: Date;
  challenge: Challenge;
  strokes: number;
  next: () => void;
}

export const Success: FunctionComponent<SuccessProps> = (props) => {
  const diffInSeconds = timeDiffInSeconds(props.startTime, props.endTime);
  const cps = Math.round( props.strokes / diffInSeconds);
  const accuracy = Math.round(props.challenge.statement.length / props.strokes * 100)
  addResult({
    accuracy,
    characterPerSecond: cps,
    challenge: props.challenge,
    time: new Date(),
  });

  return <div className={`${css.section} ${css.success}`}>
    <h2>Success</h2>
    <p>
      {cps} character per second
    </p>
    <p>
      accuracy: {accuracy}%
    </p>
    <p>
      <button onClick={props.next}>Another random challenge</button>
    </p>
  </div>
}