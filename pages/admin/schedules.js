import React from "react";
import Admin from "layouts/Admin.js";
import Schedules from "features/schedules/Schedules";

export default function schedules() {
  return <Schedules />;
}

schedules.layout = Admin;
