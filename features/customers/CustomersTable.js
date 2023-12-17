import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomersTableHeader from "./CustomersTableHeader";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomersThunk, getCustomers } from "./customerSlice";
import { useEffect } from "react";

export default function CustomersTable() {
  const dispatch = useDispatch();
  const { customers } = useSelector(getCustomers);

  console.log("customers", customers);

  useEffect(() => {
    dispatch(fetchCustomersThunk());
  }, [dispatch]);

  console.log(customers);

  const headerClass =
    "px-6 bg-slate-50 text-slate-500 align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left";

  const dataClass =
    "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4";

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <CustomersTableHeader />
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className={headerClass}>Name</th>
                <th className={headerClass}>Address</th>
                <th className={headerClass}>Yard Size</th>
                <th className={headerClass}>Cut Time</th>
                <th className={headerClass}>Price</th>
                <th className={headerClass}>Schedule</th>
                <th className={headerClass}></th>
              </tr>
            </thead>
            <tbody>
              {customers.length &&
                customers.map((customer) => (
                  <tr key={customer.id}>
                    <th className={dataClass + " text-left"}>
                      {customer.name}
                    </th>
                    <td className={dataClass}>{customer.address}</td>
                    <td className={dataClass}>{customer.yard_size} acres</td>
                    <td className={dataClass}>{customer.cut_time} min.</td>
                    <td className={dataClass}>${customer.cut_price}</td>
                    <td className={dataClass}>
                      <i className="fas fa-calendar-alt text-emerald-500 mr-4"></i>
                      {customer.Schedules.name}
                    </td>
                    <td>
                      <FontAwesomeIcon icon={faEdit} className="mr-2" />
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
