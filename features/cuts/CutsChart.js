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
import { fetchCutsThunk, getCuts } from "./cutsSlice";
import { useEffect, useState } from "react";

export default function CutsChart() {
  const dispatch = useDispatch();
  const { cuts, isLoading } = useSelector(getCuts);
  const [cutData, setCutData] = useState([]);
  const [thirtyDaysFromNow, setThirtyDaysFromNow] = useState(new Date());

  useEffect(() => {
    dispatch(fetchCutsThunk(new Date().toISOString().split("T")[0]));
  }, [dispatch]);

  useEffect(() => {
    setThirtyDaysFromNow((prev) => new Date(prev.setDate(prev.getDate() + 30)));
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const scheduledCuts = {};

    cuts.forEach((cut) => {
      const cutDate = cut.scheduled_date.split("T")[0];

      if (!scheduledCuts[cutDate]) {
        scheduledCuts[cutDate] = {
          scheduled_date: cutDate,
          no_cuts: 0,
          scheduled: 0,
          completed: 0,
          cancelled: 0,
        };
      }

      if (!scheduledCuts[cutDate][cut.status]) {
        scheduledCuts[cutDate][cut.status] = 0;
      }

      scheduledCuts[cutDate][cut.status]++;
    });

    for (
      let i = thirtyDaysFromNow;
      i >= new Date();
      i.setDate(i.getDate() - 1)
    ) {
      // fill in missing dates in scheduledCuts
      const date = i.toISOString().split("T")[0];

      if (!scheduledCuts[date]) {
        scheduledCuts[date] = {
          scheduled_date: date,
          no_cuts: 0,
          scheduled: 0,
          completed: 0,
          cancelled: 0,
        };
      }
    }

    console.log(scheduledCuts);

    setCutData(
      Object.values(scheduledCuts).sort(
        (a, b) => new Date(a.scheduled_date) - new Date(b.scheduled_date)
      )
    );
  }, [cuts, thirtyDaysFromNow]);

  return (
    <div>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={cutData}>
          <XAxis dataKey="scheduled_date" />
          <YAxis tickCount={1} />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Line type="monotone" dataKey="scheduled" stroke="#009688" />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
