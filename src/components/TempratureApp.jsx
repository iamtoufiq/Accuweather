import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const TempratureApp = () => {
  const [city, setCity] = useState(null);
  const [search, setsearch] = useState("Thane");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b83db42f870cbde98bc86931f408a577`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      console.log(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputFeild"
            onChange={(eve) => {
              setsearch(eve.target.value);
            }}
          />
        </div>

        {!city ? (
          <p>No data found</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max">
                Min:
                {city.temp_max} & Max:{city.temp_min}
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </>
        )}
      </div>
    </>
  );
};
export default TempratureApp;
