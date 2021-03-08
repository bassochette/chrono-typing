import { Challenge } from '../../data/IChallenge'
import { FunctionComponent, useState } from 'react'
import { startsWith } from 'lodash';

import css from './challenge.module.scss';

interface AnswerProps {
  challenge: Challenge;
  onSuccess: (strokes: number) => void;
}

export const Answer: FunctionComponent<AnswerProps> = ({ challenge, onSuccess }) => {
  const [strokes, setStroke] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [attempt, setAttempt] = useState('');
  const [strokeHistory, setStrokeHistory] = useState('')
  const [ok, setOk] = useState(true);
  const [over, setOver] = useState(false)

  const onStroke = (event) => {
    if (over) return;
    const input = event.target.value;
    if (startsWith(challenge.statement, input)) {
      setOk(true);
    } else {
      setOk(false);
    }

    setAttempt(input)
    setStroke(strokes + 1);
    setAccuracy(attempt.length / strokes * 100);
    setStrokeHistory(strokeHistory + input[input.length-1]);

    if (input === challenge.statement) {
      onSuccess(strokes);
      setOver(true);
    }
  }

  return (
    <div className={`${css.section} ${css.answer}`}>
      <textarea value={attempt} onChange={onStroke} className={ok ? css.ok : css.nok} />
      <p>accuracy: {Math.floor(accuracy)}%</p>
      <p>{strokeHistory}</p>
    </div>
  )
}