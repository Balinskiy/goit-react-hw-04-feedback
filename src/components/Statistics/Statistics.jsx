import { Statistic, StatisticItem } from './Statistics.styled';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Statistic>
      <StatisticItem>
        Good:<span>{good}</span>
      </StatisticItem>
      <StatisticItem>
        Neutral:<span>{neutral}</span>
      </StatisticItem>
      <StatisticItem>
        Bad:<span>{bad}</span>
      </StatisticItem>
      <StatisticItem>
        Total: <span>{total}</span>
      </StatisticItem>
      <StatisticItem>
        Positive feedback: <span>{positivePercentage}%</span>
      </StatisticItem>
    </Statistic>
  );
}

export default Statistics;
