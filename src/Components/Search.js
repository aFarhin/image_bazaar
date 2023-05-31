import React,{useState} from 'react';
import axios from 'axios';

const Search = ({addImages}) => {
  const [searchTerm, setSearchTerm] = useState("");


   function getImages() {

    axios.get("https://api.unsplash.com/search/photos", {
        params: {
            client_id: process.env.REACT_APP_ACCESS_KEY,
            query: searchTerm,
            per_page: 30
        }
    }).then(response => {
        console.log(response.data.results)
        addImages(response.data.results)
    })
        .catch(error => console.error(error))


}



  function reset(){

    axios.get("https://api.unsplash.com/photos", {
      params: {
          client_id: process.env.REACT_APP_ACCESS_KEY,
          per_page: 30
      }
  }).then(response => {
      addImages(response.data)
  })
      .catch(error => console.error(error))

      setSearchTerm('');
  }

    return(
        <div className="search">
          <h1>Get Images</h1>
            <input type="text" placeholder="Search Images" 
             onChange={e => setSearchTerm(e.target.value)}
             value={searchTerm}
            />
           
            <button onClick={getImages}>Search</button> 
            <button onClick={reset}>Reset</button>
            
        </div>
    )
}

export default Search;