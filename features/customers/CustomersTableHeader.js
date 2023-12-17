import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CustomersTableHeader() {
  return (
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-slate-700 inline-block">
            Customers
          </h3>
          <div className="float-right inline-block">
            <button className="bg-emerald-500 p-2 rounded-lg text-white">
              <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
              Add Customer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
