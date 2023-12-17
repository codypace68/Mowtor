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

export default function Dashboard() {
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
        text="20"
        title="Total Cuts This Month"
        backgroundColor={"blue"}
      />

      <StatsCard
        title={"Monthly Earnings"}
        faIcon={faDollarSign}
        text={"2000"}
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
          title="Monthly Earnings"
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
