import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

export default function GranularityToolbar() {
  return (
    <ButtonToolbar aria-label="" className="mb-5">
      <ButtonGroup className="me-2" aria-label="granularity group">
        <Button>1D</Button>
        <Button>1M</Button>
        <Button>3M</Button>
        <Button>1Y</Button>
        <Button>ALL</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}

