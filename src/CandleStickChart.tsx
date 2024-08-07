import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

// Example data
const candleStickCharts = {
  chart_id: "11",
  Headers: ["currency", "Close", "High", "Low"],
  data: [
    ["BRL", 0.199735295, 0.73949489, -0.109703513],
    ["IDR", 0.361643443, 0.517341658, -0.63633],
    ["INR", 0.27208587, 0.758844474, -0.223723191],
    ["KRW", 0.17047672, 0.803660763, -0.06454768],
    ["MYR", 0.337718308, 0.417922611, -0.711757341],
    ["PHP", 0.334904611, 0.509972199, -0.378791242],
    ["THB", 0.275903537, 0.756421768, -0.288356248],
    ["TWD", 0.761557275, 0.924206318, 0.129413389],
    ["ZAR", 0.111049281, 0.546704564, -0.621803411],
  ],
};

const transformData = (data: any) => {
  const transformedData = data.map((point: [any, any, any, any], index: number) => {
    const [currency, close, high, low] = point;
    const open = index === 0 ? close : data[index - 1][1]; // use previous close as open
    return [index, open, high, low, close];
  });
  return transformedData;
};

const CandlestickChart = () => {
  const options = {
    title: {
      text: "Currency Data",
    },
    rangeSelector: {
      selected: 1,
    },
    xAxis: {
      categories: candleStickCharts.data.map((point) => point[0]),
      labels: {
        rotation: -45,
      },
    },
    series: [
      {
        type: "candlestick",
        name: "Currency Data",
        data: transformData(candleStickCharts.data),
        tooltip: {
          valueDecimals: 5,
        },
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
};

export default CandlestickChart;
