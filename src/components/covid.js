import React, { useEffect, useState } from 'react'
import './covid.css';
const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch("https://data.askbhunte.com/api/v1/covid/summary");
            const actualData = await res.json();
            console.log(actualData.current_state);
            setData(actualData.current_state)
        } catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
            <section>
                <h1>Live</h1>
                <h2>COVID-19 CORONAVIRUS TRACKER</h2>
                <ul>
                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner"><span>Our </span>Country</div>
                            <p className="card_total card_small">Nepal</p>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">Active Cases</div>
                            <p className="card_total card_small">{}</p>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">Total <span>Death</span></div>
                            <p className="card_total card_small">{data.active}</p>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">Total <span> Recovered</span></div>
                            <p className="card_total card_small">{data.recovered}</p>
                        </div>
                    </li>

                </ul>
            </section>
        </>
    )
}

export default Covid