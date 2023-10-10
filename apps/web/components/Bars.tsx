import { PieChart, Pie, ResponsiveContainer } from "recharts";

let data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
let data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

interface Props {
  inner: Array<{ name: string; value: number }>;
  outer: Array<{ name: string; value: number }>;
  outerRadius: number;
  innerRadius: number;
  fillInner?: string;
  fillOuter?: string;
}

export function Bars({
  inner,
  outer,
  fillInner = "#8884d8",
  fillOuter = "#82ca9d",
  outerRadius,
  innerRadius
}: Props) {
  console.log(inner.length, outer.length)
  if(!inner.length) inner = data01;
  if(!outer.length) outer = data02;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data01}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={innerRadius}
          fill={fillInner}
        />
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={innerRadius+10}
          outerRadius={outerRadius}
          fill={fillOuter}
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
