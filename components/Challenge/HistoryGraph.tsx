import { FunctionComponent, useEffect, useState } from 'react'
import { getResultHistory } from '../../storage/ChallengeResult'
import {XYPlot, XAxis, YAxis, LineSeries, VerticalBarSeries} from 'react-vis';

export interface HistoryGraphProps {
  refresh: boolean;
}

export const HistoryGraph: FunctionComponent<HistoryGraphProps> = ({ refresh }) => {
  const [accuracyData, setAccuracyData] = useState<{x: number, y: number}[]>([]);
  const [cpsData, setCpsData] = useState<{x: number, y: number}[]>([]);
  const [{width, height}, setScreenDimension] = useState({ width: 300, height: 300});
  useEffect(() => {
    const challengeHistory = getResultHistory();

    const newCpsData = challengeHistory.challenges.reduce(
      (carry, item) => {
        carry.push({
          y: item.characterPerSecond,
          x: carry.length,
        })
        return carry;
      },
      [],
    );
    setCpsData(newCpsData);

    const newAccuracyData = challengeHistory.challenges.reduce(
      (carry, item) => {
        carry.push({
          y: item.accuracy,
          x: carry.length,
        })
        return carry;
      },
      [],
    );
    setAccuracyData(newAccuracyData)

    setScreenDimension({
      height: Math.floor(window.innerHeight * 0.20),
      width: window.innerWidth
    })

  }, [refresh]);

  return <section>
    <span>
     <div>
       <p>Accuracy</p>
    <XYPlot
      width={width}
      height={height}
    >
      <LineSeries data={accuracyData} color='green'/>
      <XAxis />
      <YAxis />
    </XYPlot>
     </div>
    </span>
    <span>
      <p>character per second</p>
      <div>
    <XYPlot
      width={width}
      height={height}
      label="Character per second"
    >
      <VerticalBarSeries
        data={cpsData} color='blue'/>
      <XAxis />
      <YAxis />
    </XYPlot>
      </div>
      </span>

  </section>
}