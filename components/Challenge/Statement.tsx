import { FunctionComponent } from 'react'
import css from './challenge.module.scss';

import { Challenge } from '../../data/IChallenge'

interface StatementProps {
  challenge: Challenge,
}


export const Statement: FunctionComponent<StatementProps> = ({challenge}) => {
  return (
    <section className={`${css.section} ${css.statementContainer}`}>
      <p className={css.statement}>
        {challenge.statement}
      </p>
      <p className={css.source}>
        {challenge.source}
      </p>
    </section>
  );
}