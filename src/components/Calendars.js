import React, {useCallback, useEffect, useState} from 'react'
import { useContext } from 'react'
import CalendarsContext from '../context/CalendarsContext'
import moment from 'moment'
import 'moment/locale/es'
import DatePickers from './DatePickers.js'
import { useSnackbar } from '@mui/base/SnackbarUnstyled'
import { CalendarsWrapper, CustomSnackbar, PinnedObjectButton } from '../styles/calendars.styles.js'

export default function CalendarComponent() {
  const { minDate, maxDate, openPinnedObjects, setOpenPinnedObjects } = useContext(CalendarsContext)
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const { getRootProps } = useSnackbar({
    openSnackbar,
    autoHideDuration: 5000,
  });

  moment().locale('es')

  const getDay = date => {
    let day = date.getDay()
    if (day === 0) day = 7
    return day - 1
  }

  const createCalendar = useCallback((elemId, minDate, maxDate) => {
    const month = minDate.getMonth()
    const endMonth = maxDate.getMonth()
    const year = minDate.getFullYear()
    const endYear = maxDate.getFullYear()
    const date = new Date(year, month)

    let currentDate = new Date(date.setMonth(month))
    document.getElementById(elemId).innerHTML = ''

    minDate.getTime() > maxDate.getTime() ? setOpenSnackbar(true) : setOpenSnackbar(false);
    
    for(let i = 0; i <= endMonth - month + (12 * (endYear - year)); i++) {
      let mm = currentDate.getMonth();
      let table = '<table class=\'generated-calendar\'><tr><th>L</th><th>M</th><th>X</th><th>J</th><th>V</th><th>S</th><th>D</th></tr><tr>'

      currentDate = new Date(currentDate.setMonth(mm))

      // spaces for the first row from Monday till the first day of the month
      for (let i = 0; i < getDay(currentDate); i++) {
        table += '<td></td>'
      }

      // <td> with actual dates
      while (currentDate.getMonth() ===  mm) {      
        table += '<td><span class="day">' + currentDate.getDate() + '</span></td>'
        if (getDay(currentDate) % 7 === 6)  table += '</tr><tr>' // sunday
        currentDate.setDate(currentDate.getDate() + 1)
      }
      
      // spaces for final
      if (getDay(currentDate) !== 0) {
        for (let i = getDay(currentDate); i < 7; i++) {
          table += '<td></td>'
        }
      }

      table += '</tr></table>' // close the table
      document.getElementById(elemId).innerHTML += `<h2>${moment(currentDate-1).format('MMMM')} de ${moment(currentDate-1).format('YYYY')} <small>(mes ${i+1})</small></h2> ${table}`;
    }
  }, [])

  useEffect(() => {
    createCalendar('calendars', minDate, maxDate)
  }, [minDate, maxDate, createCalendar])

  return (
    <div>
      <PinnedObjectButton onClick={e => setOpenPinnedObjects(!openPinnedObjects)}>Acciones</PinnedObjectButton>
      {Boolean(openPinnedObjects) && <DatePickers />}
      {Boolean(openSnackbar) && <CustomSnackbar {...getRootProps()}>La fecha de fin no puede ser menor que la fecha de inicio.</CustomSnackbar>}
      <CalendarsWrapper id="calendars" />
    </div>
  )
}
