import { Children } from "react";

const colSpans = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  8: "md:col-span-8",
  9: "md:col-span-9",
  10: "md:col-span-10",
  11: "md:col-span-11",
  12: "md:col-span-12",
};

export default function Card({ children, width = "3", className = "" }) {
  return (
    <>
      <div
        className={
          "break-words bg-white mb-6 shadow-lg rounded p-2 col-span-12 " +
          colSpans[width] +
          " " +
          className
        }
      >
        {children}
      </div>
    </>
  );
}

function CardHeader({ title, icon, className }) {
  return (
    <div
      className={
        "rounded-t mb-0 px-4 py-3 border-gray-900 border-solid border-b-2 " +
        className
      }
    >
      <div className="flex flex-wrap items-center ">
        <div className="relative w-full max-w-full flex-grow flex-1">
          <h2 className="text-slate-700 text-xl font-semibol">
            {icon} {title}
          </h2>
        </div>
      </div>
    </div>
  );
}

function CardBody({ children }) {
  return <div className="p-4 flex-auto">{children}</div>;
}

Card.CardHeader = CardHeader;
Card.CardBody = CardBody;
