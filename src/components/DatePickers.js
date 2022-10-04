import React from 'react'
import { useContext } from 'react'
import CalendarsContext from '../context/CalendarsContext'
//import DatePicker from 'react-datepicker'
import { DatePickerBox, DatePick, DatePickerWrapper } from '../styles/calendars.styles.js'
//import 'react-datepicker/dist/react-datepicker.css'

import moment from 'moment'
import 'moment/locale/es'

export default function DatePickers() {
  const { minDate, maxDate, changeDatePicker } = useContext(CalendarsContext)
  const countMonths = maxDate.getMonth() - minDate.getMonth() + (12 * (maxDate.getFullYear() - minDate.getFullYear()))

  moment().locale('es')

  return (
    <DatePickerBox>
      <h1>Genera calenarios seleccionando el mes de inicio y el de fin</h1>
      
      <DatePickerWrapper>
        <label htmlFor="">Mes de inicio:</label>
        <DatePick
            dateFormat="MM/yyyy"
            showMonthYearPicker   
            minDate={minDate}
            value={minDate}
            selected={minDate}
            onChange={(e) => changeDatePicker(e, 'min')}
          />
        <label htmlFor="">Mes final:</label>
        <DatePick
            dateFormat="MM/yyyy"
            showMonthYearPicker   
            minDate={minDate}
            value={maxDate}
            selected={maxDate}
            onChange={(e) => changeDatePicker(e, 'max')}
          />
      </DatePickerWrapper>

      <h2>Mostrando {countMonths+1} meses desde <b>{moment(minDate).format('D MMMM YYYY')}</b> hasta <b>{moment(maxDate).format('D MMMM YYYY')}</b></h2>
      
    </DatePickerBox>
  )
}
