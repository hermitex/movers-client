import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    Analysis: 2890,
    // "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    Analysis: 2756,
    // "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    Analysis: 3322,
    // "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    Analysis: 3470,
    // "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    Analysis: 3475,
    // "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    Analysis: 3129,
    // "The Pragmatic Engineer": 1726,
  },
];

const dataFormatter = (number) => {
  return "Ksh " + Intl.NumberFormat("KE").format(number).toString();
};

function Chart() {
  return (
    <Card>
      <Title>Last six months income (KSH)</Title>
      <AreaChart
        data={chartdata}
        categories={["Analysis"]}
        dataKey="date"
        height="h-64"
        colors={["indigo", "cyan"]}
        valueFormatter={dataFormatter}
        marginTop="mt-4"
      />
    </Card>
  );
}

export default Chart;
