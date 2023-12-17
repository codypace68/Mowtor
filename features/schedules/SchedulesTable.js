import { useDispatch, useSelector } from "react-redux";
import { fetchSchedulesThunk, getSchedules } from "./scheduleSlice";
import { useEffect } from "react";

export default function SchedulesTable() {
  const dispatch = useDispatch();
  const { schedules } = useSelector(getSchedules);

  console.log("schedules", schedules);

  useEffect(() => {
    dispatch(fetchSchedulesThunk());
  }, [dispatch]);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-slate-700">
                Schedules
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-slate-50 text-slate-500 align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Name
                </th>
                <th className="px-6 bg-slate-50 text-slate-500 align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {schedules.length &&
                schedules.map((schedule) => (
                  <tr key={schedule.id}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      {schedule.name}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      Every {schedule.amount} {schedule.interval}
                      {"(s) "}
                      {schedule.precision_point &&
                        getPrecisionPointText(
                          schedule.interval,
                          schedule.precision_point
                        )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

// Interval will be Weekly, Monthly, or Yearly
function getPrecisionPointText(interval, precisionPoint) {
  if (interval === "Week" || interval === "Weekly") {
    return `on ${precisionPoint}`;
  } else if (interval === "Monthly") {
    return `on the ${precisionPoint}`;
  } else if (interval === "Yearly") {
    return `on ${precisionPoint}`;
  }
}
