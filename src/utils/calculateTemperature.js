import moment from 'moment'

const calculateTemperature = (temp) => {
  const currentHours = moment().get('hours')
  return currentHours < 12 ? Math.round(temp.morn)
    : (currentHours < 18 ? Math.round(temp.eve)
      : Math.round(temp.night)
    )
}

export default calculateTemperature