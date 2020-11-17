import moment from 'moment'
import { Row, Col } from 'react-bootstrap'

import { weatherIconsMap, calculateTemperature } from '../utils'

function ForecastList(props) {
  const { forecastList } = props

  return <Row>
    {forecastList.map(({ temp, weather: [{ icon }] }, index) => {
      return <Col key={index} align="center" md="auto" className="mt-4 pr-4">
        <h5 className="mb-0">{moment().add(index, 'days').format('D')}</h5>
        <h5 className="mb-0">{moment().add(index, 'days').format('ddd')}</h5>
        <img className="weather-icon-md" src={weatherIconsMap[icon]} alt={`${weatherIconsMap[icon] - icon}`} />
        <h5>{`${calculateTemperature(temp)}C`}</h5>
      </Col>
    })}
  </Row>
}

export default ForecastList