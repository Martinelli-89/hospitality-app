import { useState } from "react";
import Temperature from "../../Components/Temperature/Temperature";
import SearchTemperature from "../SearchTemperature/SearchTemperature";
import "./FilterTemperature.scss";


const FilterTemperature = ({equipment}) => {

    const [temperatures, setTemperatures] = useState ([]);

    const updateTemperatures = async(searchFunction) => {
        setTemperatures(await searchFunction);
    }

    return (

        <section className="temperatureData">
            <section className="temperatureData__grid">
                <p className="temperatureData__title">Search temperatures</p>
                <div className="temperatureData__options">
                    <SearchTemperature equipment={equipment} updateTemperatures={updateTemperatures}/>
                </div>
                <p className="temperatureData__supplier">Serial number</p>
                <p className="temperatureData__type">Item type</p>
                <p className="temperatureData__temperature">Temperature taken</p>
                <p className="temperatureData__date">Date</p>
            </section>
            <div className="temperatureData__data">
                {temperatures.map((temperature, index) => { 
                    return <Temperature key={index} data={temperature}/>
                })}
            </div>
        </section>

    )

}

export default FilterTemperature;