import React,{ useEffect,useState} from 'react';
import './App.css';
import axios from "axios";
import Search from './Components/Search';
import Display from './Components/Display';

function App() {
  let [data,setData]=useState([]);

  useEffect(() => {

    axios.get("https://api.unsplash.com/photos", {
      params: {
        client_id: process.env.REACT_APP_ACCESS_KEY,
        per_page:30
      }
    }).then(response => setData(response.data))
      .catch(error => console.log(error))
  }, [])
  useEffect(() => {

  }, [data]);

  return (
    <div className="App">
      <nav>
        image<span>Bazaar.</span>
      </nav>
      <Search addImages={setData}/>
      <Display images={data}/>
    </div>
  );
}

export default App;