import { faDollarSign, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "components/Cards/Card";

const backgroundColors = {
  green: "bg-green-50",
  blue: "bg-blue-50",
  red: "bg-red-50",
  yellow: "bg-yellow-50",
};

export default function StatsCard({ faIcon, text, title, backgroundColor }) {
  return (
    <Card className={backgroundColors[backgroundColor]}>
      <Card.CardHeader title={title} className="text-white" />
      <Card.CardBody>
        <FontAwesomeIcon icon={faIcon} className="text-5xl" />
        <h1 className="text-5xl float-right inline">{text}</h1>
      </Card.CardBody>
    </Card>
  );
}
