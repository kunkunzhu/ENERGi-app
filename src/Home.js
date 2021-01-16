import styles from "./TabBar.css"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import TabBar from "./TabBar";
import Graph from "./Graph";

function Home() {

    return (
        <>
            <h1 class="title">ENERGi</h1>
            <a href="/data">Data Archive</a>
            <Graph />
            <TabBar />
        </>
    )

}

export default Home