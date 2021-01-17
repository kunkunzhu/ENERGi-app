import styles from "./TabBar.css"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import TabBar from "./TabBar";
import Graph from "./Graph"

function Data() {

    return (
        <>
            <h1>archive</h1>

            <Graph data={[60, 58, 78, 80, 60]} name="this week" />
            <Graph data={[63, 59, 79, 82, 67]} name="this month" />

            <TabBar />
        </>
    )

}

export default Data