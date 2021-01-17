import React, { useEffect, useState } from 'react'
import TabBar from "./TabBar";
import Graph from "./Graph";
import app from "./components/Firebase/firebase";
import "firebase/database";

function Home() {
    //Hooks 
    const [energyData, setEnergyData] = useState([]);
    useEffect(() => {
        app.database().ref("/dataPoints").once("value").then((data) => {
            if(data && data.val()){
                console.log(data.val());
                //loop array
            }
        })
    }, [])
    return (
        <>
            <h1 class="title">ENERGi</h1>
            {//TODO: PULL DATA FROM FIREBASE AND LOAD IT ON GRAPH
            }
            <Graph data={[65, 59, 80, 81, 56, window.localStorage.getItem("recent")]} name="today's progress" />
            <TabBar />
        </>
    )

}

export default Home