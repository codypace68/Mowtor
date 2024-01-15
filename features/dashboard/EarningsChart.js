import {
  fetchCutsThunk,
  fetchPastThreeMonthCutsThunk,
  getCuts,
  getPastCuts,
} from "features/cuts/cutsSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

const MONTHS_MAP = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "Aug",
  "09": "Sept",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

export default function EarningsChart() {
  const dispatch = useDispatch();
  const [pastCutsData, setPastCutsData] = useState([]);
  const [allCustomersListed, setAllCustomersListed] = useState([]); // ["John Doe", "Bob Smith"]
  const { pastCuts, isLoading } = useSelector(getCuts);

  useEffect(() => {
    if (isLoading) return;
    const chartData = {};
    const customers = [];

    pastCuts.forEach((cut) => {
      // get the month name from the scheduled_date
      const cutMonth = MONTHS_MAP[cut.scheduled_date.split("-")[1]];
      const customerName = cut.Customers.name;
      // if the month doesn't exist in chartData, create it
      if (!chartData[cutMonth]) {
        chartData[cutMonth] = {
          name: cutMonth,
        };
      }

      if (!chartData[cutMonth][customerName]) {
        chartData[cutMonth][customerName] = 0;
      }

      if (!customers.includes(customerName)) customers.push(customerName);

      chartData[cutMonth][customerName] += cut.Customers.cut_price;
    });

    console.log(chartData);

    setPastCutsData(Object.values(chartData));
    setAllCustomersListed(customers);
    console.log(Object.values(chartData));
  }, [pastCuts]);

  useEffect(() => {
    dispatch(fetchPastThreeMonthCutsThunk());
  }, [dispatch]);

  return (
    <div>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={pastCutsData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip formatter={(text) => "$" + text} />
          {allCustomersListed &&
            allCustomersListed.map((customer) => {
              return (
                <Line type="monotone" dataKey={customer} stroke="#8884d8" />
              );
            })}
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
