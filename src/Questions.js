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
        <div class="box">
            <Button href="/" variant="info">BACK</Button>{' '}
            <h2>questions</h2>

            <div id="questions" class="header" className={styles.Questions}>
                <div class="range-wrapper frame">
                    <label class="label" htmlFor="customRange1">How tired do you feel right now?</label>
                    <input type="range" className="custom-range" id="q1Range" />

                    <label class="label" htmlFor="customRange2">How jouyous do you feel right now?</label>
                    <input type="range" className="custom-range" id="q2Range" />

                    <label class="label" htmlFor="customRange3">Rate your current mood:</label>
                    <input type="range" className="custom-range" id="q3Range" />
                </div>
            </div>
            {/* <Button id="next" onClick={handleClick} href="/" variant="info">NEXT</Button>{' '} */}
            <Button onClick={handleClick} href="/" variant="info">SUBMIT</Button>{' '}
        </div>
        
    )
}

export default Questions