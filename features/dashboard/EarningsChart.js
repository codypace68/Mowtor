import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    Bob: 20,
    John: 10,
  },
  {
    name: "Feb",
    Bob: 25,
    John: 15,
  },
  {
    name: "Feb",
    Bob: 35,
    John: 10,
  },
];

export default function EarningsChart() {
  return (
    <div>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Line type="monotone" dataKey="Bob" stroke="#8884d8" />
          <Line type="monotone" dataKey="John" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
