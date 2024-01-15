import Card from "components/Cards/Card";
import EarningsChart from "./EarningsChart";
import {
  faAddressBook,
  faCancel,
  faCut,
  faDollarSign,
  faMagnifyingGlassDollar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CutsChart from "features/cuts/CutsChart";
import StatsCard from "components/Cards/StatsCard";
import MonthlyCuts from "./MonthlyCuts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCutsThunk, getCuts } from "features/cuts/cutsSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { cuts, isLoading } = useSelector(getCuts);
  const projectedEarnings = [...cuts].reduce((acc, cut) => {
    return acc + cut.Customers.cut_price;
  }, 0);

  useEffect(() => {
    dispatch(fetchCutsThunk(new Date().toISOString().split("T")[0]));
  }, [dispatch]);

  return (
    <>
      <StatsCard
        faIcon={faUsers}
        text="45"
        title="Total Customers"
        backgroundColor={"green"}
      />

      <StatsCard
        faIcon={faMagnifyingGlassDollar}
        text={cuts.length}
        title="Total Cuts This Month"
        backgroundColor={"blue"}
      />

      <StatsCard
        title={
          <div>
            Earnings <small className="text-sm">(projected)</small>
          </div>
        }
        faIcon={faDollarSign}
        text={projectedEarnings.toFixed(2)}
        backgroundColor={"yellow"}
      />

      <StatsCard
        title={"Cancelled Cuts"}
        faIcon={faCancel}
        text={"4"}
        backgroundColor={"red"}
      />

      <Card width="6">
        <Card.CardHeader
          title={
            <span>
              Monthly Earnings{" "}
              <small className="text-sm">(Past 3 Months)</small>
            </span>
          }
          icon={<FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>}
        />
        <Card.CardBody>
          <EarningsChart />
        </Card.CardBody>
      </Card>

      <MonthlyCuts />
    </>
  );
}
