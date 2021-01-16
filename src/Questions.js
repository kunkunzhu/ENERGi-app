import styles from "./Questions.css"
import React from "react"
import Button from "react-bootstrap/Button"

var energyLevel = 0;

function handleClick(){
    var fs = require("fs");
    console.log("calculating");
    let q1Score = parseInt(document.getElementById("q1Range").value);
    let q2Score = parseInt(document.getElementById("q2Range").value);
    let q3Score = parseInt(document.getElementById("q3Range").value);
    energyLevel = (q1Score + q2Score  + q3Score)/3;
    console.log(q1Score,q2Score,q3Score,energyLevel);
    
    
}

function Questions() {

    return (
        <>
            <Button href="/" variant="info">BACK</Button>{' '}
            <h1>QUESTIONS</h1>

            <div id="questions" className={styles.Questions}>
                <label htmlFor="customRange1">HOW TIRED DO YOU FEEL RIGHT NOW?</label>
                <input type="range" className="custom-range" id="q1Range" />
                <label htmlFor="customRange2">HOW JOYOUS DO YOU FEEL RIGHT NOW?</label>
                <input type="range" className="custom-range" id="q2Range" />
                <label htmlFor="customRange3">RATE YOUR CURRENT MOOD:</label>
                <input type="range" className="custom-range" id="q3Range" />
            </div>

            {/* <Button id="next" onClick={handleClick} href="/" variant="info">NEXT</Button>{' '} */}
            <Button id="next" onClick={handleClick} variant="info">NEXT</Button>{' '}
        </>
        
    )
    
}
/*
var nextBtn = document.getElementById("next");
let Q1 = document.getElementById('q1');
let Q2 = document.getElementById('q2');
let Q3 = document.getElementById('q3');

Q1.className = "";
    Q2.className = "hidden";
    Q3.className = "hidden";

nextBtn.onclick = function () {
    Q1.className = "hidden";
    Q2.className = "";
    Q3.className = "hidden";
}
        
var submitBtn = document.getElementById("submit");
    submitBtn.onclick = function(){
    console.log("button clicked");
}*/
export default Questions