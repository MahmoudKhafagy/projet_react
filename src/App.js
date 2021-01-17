import { useEffect, useState } from "react";

import React from "react";

import "./App.css";
import "weather-icons/css/weather-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";




function App() {

    let[data, setData] = useState()


    useEffect(() => {

        fetch(
            'http://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&units=metric&appid=69d025f108879fa590c728b4bb988809'
        )
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
    },[]);

    console.log(data)

    if(data){
        var { humidity, feels_like, temp_max, temp_min, temp } = data.main
        var { description, icon } = data.weather[0].icon;

        var iconLink = 'http://openweathermap.org/img/wn/03n.png'
    }

console.log(icon)


    return (
        <div className="container">
            <div className="cards">
                <h1>Paris</h1>
                <h5 className="py-4">
                    <img src={ iconLink }/>
                </h5>

                <h1 className="py-2">{temp}&deg;</h1>

                <h3>
                    <span className="px-4">Max: {temp_max}&deg;</span>
                    <span className="px-4">Min: {temp_min}&deg;</span>


                </h3>

                <h4 className="py-3">
                    {description}
                </h4>
            </div>
        </div>
    );
}
export default App;
