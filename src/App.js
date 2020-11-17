import { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'

import CityListView from './views/CityListView'
import WeatherForecastView from './views/WeatherForecastView'

function App() {
  const [selectedCity, setSelectedCity] = useState(null)

  return <div className="App">
    <ToastContainer newestOnTop />
    <Container fluid>
      <Row>
        <Col md={4}>
          <CityListView setSelectedCity={setSelectedCity} />
        </Col>
        <Col>
          {selectedCity !== null ? <WeatherForecastView selectedCity={selectedCity} /> : null}
        </Col>
      </Row>
    </Container>
  </div>
}

export default App;
