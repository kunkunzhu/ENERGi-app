import styles from "./TabBar.css"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import TabBar from "./TabBar";

function Home() {

    return (
        <>
            <h1>hello world</h1>
            <a href="/data">CLICK HERE</a>
            <TabBar />
        </>

    )

}

export default Home