import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'

function SearchBox(props) {
  const { cityName, onChange, onSubmit } = props
  return <Row>
    <Col>
      <InputGroup className="mb-3">
        <FormControl
          value={cityName || ''}
          onChange={onChange}
          placeholder="Type city name"
        />
        <InputGroup.Append>
          <Button variant="outline-dark" onClick={onSubmit}>
            <i className="fa fa-plus" />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Col>
  </Row>
}

export default SearchBox