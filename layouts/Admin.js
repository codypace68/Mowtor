import React from "react";

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-slate-100">
        <div className="relative bg-slate-800 md:pt-20 ">
          <AdminNavbar />
        </div>
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="px-4 md:px-10 mx-auto mt-10 h-full ">
          <div className="grid grid-cols-12 gap-2 min-h-screen">{children}</div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
