import { Row, Col, ListGroup, } from 'react-bootstrap'
import { weatherIconsMap } from '../utils'

function CityList(props) {
  const { cityList, onRefresh, onRemove, setSelectedCity } = props;

  const handleRefreshIconClick = (e, name) => {
    onRefresh(name)
    e.stopPropagation()
  }

  const handleRemoveIconClick = (e, id) => {
    onRemove(id)
    e.stopPropagation()
  }

  return <>
    <Row>
      <Col>
        <div><h6>Recent Locations</h6></div>
      </Col>
    </Row>
    {cityList.length
      ? <Row>
        <Col>
          <ListGroup>
            {cityList.map(({ id, name, temp, weather: { icon } }) =>
              <ListGroup.Item key={id} action onClick={() => setSelectedCity({ id, name })}>
                <Row>
                  <Col md="auto" className="align-self-center">
                    {`${name} - ${Math.round(temp)}°C`}
                  </Col>
                  <Col>
                    <img
                      className="weather-icon-sm"
                      src={weatherIconsMap[icon]}
                      alt={`${weatherIconsMap[icon]}-icon`}
                    />
                  </Col>
                  <Col md="auto" className="align-self-center">
                    <i className="fa fa-refresh" onClick={(e) => handleRefreshIconClick(e, name)} />
                    <i className="pl-3 fa fa-remove" onClick={(e) => handleRemoveIconClick(e, id)} />
                  </Col>
                </Row>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
      : null}
  </>;
}

export default CityList