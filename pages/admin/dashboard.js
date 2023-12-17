import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Admin from "layouts/Admin.js";
import Dashboard from "../../features/dashboard/Dashboard";

export default function dashboard() {
  return (
    <>
      <Dashboard />
    </>
  );
}

dashboard.layout = Admin;
