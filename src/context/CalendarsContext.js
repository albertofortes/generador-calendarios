import { createContext, useState } from 'react'

const CalendarsContext = createContext()

export const CalendarsProvider = ({ children }) => {
  const [minDate, setMinDate] = useState(new Date())
  const [maxDate, setMaxDate] = useState(new Date())
  const [openPinnedObjects, setOpenPinnedObjects] = useState(false)

 /* const openDatepickers = e => {
    console.log('e openDatepickers ', e)
    setOpenDatePicker(!openDatePicker)
  }*/

  const changeDatePicker = (e, fn) => {
    switch(fn) {
      case 'min':
        setMinDate(new Date(e))
        break
      case 'max':
        setMaxDate(new Date(e))
        break
      default:
        break
    }
  }

  return (
    <CalendarsContext.Provider
      value={{
        minDate,
        maxDate,
        changeDatePicker,
        openPinnedObjects,
        setOpenPinnedObjects
      }}
    >
      {children}
    </CalendarsContext.Provider>
  )
}

export default CalendarsContext
