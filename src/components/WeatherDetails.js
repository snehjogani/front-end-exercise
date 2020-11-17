import { Row, Col } from 'react-bootstrap'

import { weatherIconsMap, calculateTemperature } from '../utils'

function WeatherDetails(props) {
  const { forecast: { temp, speed, deg, pressure, weather: [{ icon, description }] } } = props

  return <Row className="mt-3">
    <Col md="auto">
      <img
        className="weather-icon-lg"
        src={weatherIconsMap[icon]}
        alt={`${weatherIconsMap[icon]}-icon`}
      />
    </Col>
    <Col className="align-self-center">
      <Row className="my-3">
        <Col>
          <h4>
            {`${calculateTemperature(temp)}°C`}
          </h4>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <h4>{description[0].toUpperCase() + description.slice(1,)}</h4>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <h4>{`Wind: ${speed}ms ${deg} deg`}</h4>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <h4>{`Pressure ${pressure}`}</h4>
        </Col>
      </Row>
    </Col>
  </Row>
}

export default WeatherDetails