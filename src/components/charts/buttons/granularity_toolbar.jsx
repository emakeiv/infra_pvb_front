import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

export default function GranularityToolbar() {
  return (
    <ButtonToolbar aria-label="" className="mb-5">
      <ButtonGroup className="me-2" aria-label="granularity group">
        <Button>1D</Button>
        <Button variant="secondary">1M</Button>
        <Button variant="secondary">3M</Button>
        <Button variant="secondary">1Y</Button>
        <Button variant="secondary">ALL</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}
