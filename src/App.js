import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
       <div className="container">
        <Weather/>
        <footer>
          This website was coded by 
          <a href='https://github.com/Faithk33'>Lethabo Kekana</a>
           and is open-sourced on 
           <a href='https://github.com/Faithk33/react-weather-project'>Github</a> 
           and hosted by
         <a href='https://react-weather-lkekana.netlify.app/'>Netlify</a>
        </footer>
      </div>
    </div>
  );
}


