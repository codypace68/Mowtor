import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Badge, Calendar } from "rsuite";
import { fetchCutsThunk, getCuts } from "./cutsSlice";

export default function CutsCalendar() {
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();
  const { cuts } = useSelector(getCuts);

  useEffect(() => {
    dispatch(fetchCutsThunk());
  }, [dispatch]);

  console.log("cuts", cuts);

  return (
    <div className="col-span-12">
      <Calendar
        onChange={onChange}
        value={value}
        className="col-span-12"
        renderCell={(date) => {
          const filteredCuts = cuts.filter(
            (cut) =>
              new Date(cut.scheduled_date).toISOString().split("T")[0] ===
              date.toISOString().split("T")[0]
          );

          if (filteredCuts.length) {
            return (
              <ul>
                {filteredCuts.map((cut) => (
                  <li key={cut.id}>
                    <Badge />
                    <b>
                      {new Date(cut.scheduled_date).getHours()}:
                      {new Date(cut.scheduled_date).getMinutes()}
                    </b>
                    {"- "}
                    <span>{cut.Customers.name}</span>
                  </li>
                ))}
              </ul>
            );
          }
        }}
      />
    </div>
  );
}
