import React, { useState } from 'react'
import TabBar from "./TabBar";
import Graph from "./Graph";

function Home() {

    return (
        <>
            <h1 class="title" id="icon">ENERGi</h1>
            <Graph data={[65, 59, 80, 81, 56, window.localStorage.getItem("recent")]} name="today's progress" />
            <TabBar />
        </>
    )

}

export default Home