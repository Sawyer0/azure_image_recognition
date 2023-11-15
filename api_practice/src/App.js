import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [data, setdata] = useState(null);

  useEffect (() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      console.log(response)
      setdata(response.data);
    })
    .catch( error => {
      console.error("Error fetching data", error);
    })
    .then(() => {

    })
  }, []);

  const numberOfUsersToDisplay = 1;

  return (
    <div>
      {data && data.slice(0, numberOfUsersToDisplay).map(item => (
        <div key={item.id}> 
        <p>Name: {item.name} </p>
        <p>Email: {item.email} </p>
        <p>Phone Number: {item.phone}</p>
        <p>Address: {item.address.city}</p>
        <p>Company: {item.company.bs}</p>
        <p>Catch Phrase: {item.company.catchPhrase}</p>
        <p>Website: {item.website}</p>
        </div>
      ))}
    </div>
  )
}


export default App;
