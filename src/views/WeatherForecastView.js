import { useState, useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'

import WeatherDetails from '../components/WeatherDetails'
import ForecastList from '../components/ForecastList'
import { getWeatherForecastByCity } from '../common/api'

function WeatherForecastView(props) {
  const { selectedCity: { name } } = props

  const [forecast, setForecast] = useState([])
  const [refreshFlag, setRefreshFlag] = useState(false)

  useEffect(() => {
    getWeatherForecastByCity(name, (data) => setForecast(data))
  }, [name, refreshFlag])

  return forecast.length
    ? <Card className="full-height px-4">
      <Row>
        <Col><h3>{name}</h3></Col>
        <Col className="align-self-center" md="auto">
          <i className="fa fa-refresh" onClick={(e) => setRefreshFlag(!refreshFlag)} />
        </Col>
      </Row>
      <WeatherDetails forecast={forecast[0]} />
      <ForecastList forecastList={forecast} />
    </Card>
    : null
}

export default WeatherForecastView