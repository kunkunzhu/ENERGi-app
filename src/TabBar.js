import styles from "./TabBar.css"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function TabBar() {

    return (
        <div className={styles.TabBar}>
            <Navbar fixed="bottom">
                <Nav.Link href="/">
                    
                </Nav.Link>
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/data">DATA</Nav.Link>
                <Nav.Link href="/questions">QUESTIONS</Nav.Link>
                

            </Navbar>
        </div>
    )

}

export default TabBar