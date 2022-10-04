import './reset.css';
import { CalendarsProvider } from './context/CalendarsContext'
import Calendars from  './components/Calendars'

function App() {
  return (
    <CalendarsProvider>
      <>
        <Calendars />
      </>
    </CalendarsProvider>
  );
}

export default App;
