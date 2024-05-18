import { useState } from "react";
import "./App.css";
import data from "./sensor.json";
import Card from "./components/card";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureLow } from "react-icons/fa";

function App() {
  console.log(data);
  return (
    <div className="container">
      <div className="title">
        <h1>Sensor de Umidade e Temperatura</h1>
      </div>

      <div className="items">
        <div className="card" style={{backgroundColor: data.temperatura > 24 ? "#631c23" : "#043766", transition: '0.8s'}}>
          <div className="test" style={{backgroundColor: data.temperatura > 24 ? "#c91426" : "#1178d9", transition: '0.8s'}}
          >
            <FaTemperatureLow size={30} color="white"/>
          </div>
          <Card temp={data.temperatura} />
        </div>

        <div className="card" style={{backgroundColor: data.umidade < 60 ? "#631c23" : "#043766", transition: '0.8s'}}>
          <div className="test" style={{backgroundColor: data.umidade < 60 ? "#c91426" : "#1178d9", transition: '0.8s'}}>
            <WiHumidity size={30} className="icon" />
          </div>
          <Card umid={data.umidade} />
        </div>
      </div>
    </div>
  );
}

export default App;
