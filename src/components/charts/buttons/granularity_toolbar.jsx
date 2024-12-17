import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

export default function GranularityToolbar() {
  
  const click = (e) => {
    let timeFrame = "";
    console.log(`selected:${e.target.value}`);

    switch (e.target.value) {
      case "1D":
        timeFrame = "Daily";
        break;
      case "1M":
        timeFrame = "Monthly";
        break;
      case "3M":
        timeFrame = "Quarterly";
        break;
      case "1Y":
        timeFrame = "Yearly";
        break;
      case "ALL":
        timeFrame = "All";
        break;
      default:
        timeFrame = "Custom";
        break;
    }
    console.log(`time frame was set to:${timeFrame}`);
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
