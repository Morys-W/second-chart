import React, { useEffect, useState } from 'react';
import './App.css';
import Chart from './Components/Chart';
import Insights from './Components/Insights';

const datas = [
    [10, 30, 40, 20],
    [10, 40, 30, 20, 50, 10],
    [60, 30, 40, 20, 30]
]
var i = 0;

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
        setData(datas[i++]);
        if(i === datas.length) i = 0;
    }


    return (
        <div className="App">
            <Insights />
            <h2 className="chart-header">Attacker's Gender</h2>
            <button onClick={changeData} className="change-button">Change Data</button>
            <Chart width={500} height={350} data={data} />
        </div>
    );
}

export default App;