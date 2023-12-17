import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "11-14",
    Cuts: 5,
    "Cancelled Cuts": 1,
  },
  {
    name: "11-15",
    Cuts: 10,
    "Cancelled Cuts": 2,
  },
  {
    name: "11-16",
    Cuts: 4,
    "Cancelled Cuts": 1,
  },
  {
    name: "11-17",
    Cuts: 15,
    "Cancelled Cuts": 0,
  },
];

export default function CutsChart() {
  return (
    <div>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Line type="monotone" dataKey="Cuts" stroke="#009688" />
          <Line type="monotone" dataKey="Cancelled Cuts" stroke="#E91E63" />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
