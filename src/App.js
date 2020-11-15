import { useState } from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify'

import './App.css';
import SearchBox from './components/SearchBox'
import { getWeatherByCity } from './common/api'

function App() {
  const [cityName, setCityName] = useState('')

  const onCityNameChange = (event) => {
    setCityName(event.target.value)
  }

  const onAddButtonClick = () => {
    // console.log({ cityName })
    getWeatherByCity(cityName)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        if (err && err.data.cod === '404') {
          toast.error(err.data.message[0].toUpperCase() + err.data.message.slice(1,) + '!')
        }
      })
  }

  return <div className="App">
    <ToastContainer />
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <SearchBox
              onChange={onCityNameChange}
              onSubmit={onAddButtonClick}
            />
          </Card>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  </div>
}

export default App;
