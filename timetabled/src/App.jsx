import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Calendar from './Components/Calendar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="App">
      <h1>
        Itinerary for 7 days in Chicago
      </h1>
      <h2>
        Welcome to Chicago, Daniel! Check this calendar out to get to know the city and see all the sights during your stay.
      </h2>
      <Calendar/>
   </div>
  )
}

export default App
