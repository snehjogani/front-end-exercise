import { useState } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'

import { getCurrentWeatherByCity } from '../common/api'
import SearchBox from '../components/SearchBox'
import CityList from '../components/CityList'

function CityListView(props) {
  const { setSelectedCity } = props
  const [cityName, setCityName] = useState('')
  const [cityList, setCityList] = useState([])

  const onCityNameChange = (event) => {
    setCityName(event.target.value.toLowerCase())
  }

  const onAddButtonClick = () => {
    if (cityList.map(({ name }) => name.toLowerCase()).includes(cityName)) {
      toast.info('City already exists!')
      return true
    }
    getCurrentWeatherByCity(cityName, (city) => {
      setCityList(cityList.length < 8 ? [city, ...cityList] : [city, ...cityList.slice(0, -1)])
      setCityName('')
    })
  }

  const refreshWeatherData = (cityName) => {
    getCurrentWeatherByCity(cityName, (city) => {
      setCityList(cityList.map((data) => data.id === city.id ? city : data))
    })
  }

  const removeCity = (id) => {
    setCityList(cityList.filter((city) => city.id !== id))
  }

  return <Card className="full-height">
    <SearchBox
      cityName={cityName}
      onChange={onCityNameChange}
      onSubmit={onAddButtonClick}
    />
    <CityList
      cityList={cityList}
      onRemove={removeCity}
      onRefresh={refreshWeatherData}
      setSelectedCity={setSelectedCity}
    />
    <Row className="mt-auto align-self-end">
      <Col>
        <Button onClick={() => setCityList([])}>Clear</Button>
      </Col>
    </Row>
  </Card>
}

export default CityListView;
