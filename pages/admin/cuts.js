import React from "react";
import Admin from "layouts/Admin.js";
import Cuts from "features/cuts/Cuts";

export default function cuts() {
  return <Cuts />;
}

cuts.layout = Admin;
