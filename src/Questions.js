import styles from "./Questions.css"
import React from "react"
import Button from "react-bootstrap/Button"

var energyLevel = 0;
function handleClick(){
    console.log("calculating");
    let q1Score = parseInt(document.getElementById("q1Range").value);
    let q2Score = parseInt(document.getElementById("q2Range").value);
    let q3Score = parseInt(document.getElementById("q3Range").value);
    energyLevel = (q1Score + q2Score  + q3Score)/3;
    console.log(q1Score,q2Score,q3Score,energyLevel);
    window.localStorage.setItem("recent", energyLevel)

}

function Questions() {
    return (
        <>
            <Button href="/" variant="info">BACK</Button>{' '}
            <h1>QUESTIONS</h1>

            <div id="questions" class="header" className={styles.Questions}>
                <label htmlFor="customRange1">HOW TIRED DO YOU FEEL RIGHT NOW?</label>
                <input type="range" className="custom-range" id="q1Range" />

                <label htmlFor="customRange2">HOW JOYOUS DO YOU FEEL RIGHT NOW?</label>
                <input type="range" className="custom-range" id="q2Range" />

                <label htmlFor="customRange3">RATE YOUR CURRENT MOOD:</label>
                <input type="range" className="custom-range" id="q3Range" />
            </div>
            {/* <Button id="next" onClick={handleClick} href="/" variant="info">NEXT</Button>{' '} */}
            <Button fixed="bottom" onClick={handleClick} href="/" variant="info">SUBMIT</Button>{' '}
        </>
    )
}

export default Questions