import styles from "./TabBar.css"
import React from "react"
import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/Nav"
import TabBar from "./TabBar";

function Questions() {

    return (
        <>
            <Button href="/" variant="info">BACK</Button>{' '}
            <h1>QUESTIONS</h1>

            <Button variant="info">DONE</Button>{' '}
        </>
    )

}

export default Questions