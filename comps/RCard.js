import { Card } from "reactstrap";

function RCard({ sculpture }) {
  return (
    <div>
      <p>Correct!</p>
      <Card className="rcard">
        <div>{sculpture.description}</div>
      </Card>
    </div>
  );
}

export default RCard;
