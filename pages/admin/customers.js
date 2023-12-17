import React from "react";
import Admin from "layouts/Admin.js";
import Customers from "features/customers/Customers";

export default function customers() {
  return <Customers />;
}

customers.layout = Admin;
