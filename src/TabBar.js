import styles from "./TabBar.css"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function TabBar() {

    return (
        <div className={styles.TabBar}>
            <Navbar>
                <Navbar.Brand> ENERGi </Navbar.Brand>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Navbar>
        </div>
    )

}

export default TabBar