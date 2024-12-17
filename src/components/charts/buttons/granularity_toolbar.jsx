import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

export default function GranularityToolbar() {
  const click = (e) => {
    console.log(`good boy:${e.target.value}`);
  };

  return (
    <ButtonToolbar aria-label="" className="mb-5">
      <ButtonGroup className="me-2" aria-label="granularity group">
        <Button value="1D" onClick={click} variant="primary">
          1D
        </Button>
        <Button value="1M" onClick={click} variant="secondary">
          1M
        </Button>
        <Button value="3M" onClick={click} variant="secondary">
          3M
        </Button>
        <Button value="1Y" onClick={click} variant="secondary">
          1Y
        </Button>
        <Button value="ALL" onClick={click} variant="secondary">
          ALL
        </Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}
