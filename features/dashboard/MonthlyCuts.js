import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "components/Cards/Card";
import CutsChart from "features/cuts/CutsChart";

export default function MonthlyCuts() {
  return (
    <Card width="6">
      <Card.CardHeader
        title="Cuts This Month"
        icon={<FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>}
      />
      <Card.CardBody>
        <CutsChart />
      </Card.CardBody>
    </Card>
  );
}
