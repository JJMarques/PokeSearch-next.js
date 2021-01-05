import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [apiData, setApiData] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      const result = await axios('https://api.ipma.pt/open-data/distrits-islands.json')
      setApiData(result.data.data)
    }
    fetchApi()
  }, [])
  
  let locationList
  if (apiData.length > 0) {
    locationList = apiData.map((location) => {
      console.log(location);
      return(
        <li key={location.globalIdLocal}>
          {location.local}
        </li>
      )
    })
  }

  return (
    <div className="App">
      {locationList}
    </div>
  );
}

export default App;
