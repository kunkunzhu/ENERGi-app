import styles from "./Questions.css";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Firebase, { FirebaseContext } from './components/Firebase';
import app from "./components/Firebase/firebase";
import "firebase/database";


function Questions() {

    //var is function scoped and let is block scoped
    var energyLevel = 0;
    function handleClick() {
        console.log("calculating");
        let q1Score = parseInt(document.getElementById("q1Range").value);
        let q2Score = parseInt(document.getElementById("q2Range").value);
        let q3Score = parseInt(document.getElementById("q3Range").value);
        energyLevel = (q1Score + q2Score + q3Score) / 3;
        console.log(q1Score, q2Score, q3Score, energyLevel);
        window.localStorage.setItem("recent", energyLevel);
        //TODO: ADD STUFF HERE
        app.database().ref("/dataPoints").transaction((dataPoints) => {
            if(dataPoints){
                //MODIFY
                dataPoints.push({
                    

                })
            }
            return dataPoints;
        })

    }

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
            {/* { <Button id="next" onClick={handleClick} href="/" variant="info">NEXT</Button>{' '} } */}
            <Button onClick={handleClick}  variant="info">SUBMIT</Button>{' '}
        </div>

    )
}

export default Questions
/*
export default class Questions extends Component {
    constructor(){
        super();
        this.state={
            energy: []
        };
    }

    componentDidMount(){
        db.ref("energy_datas/0001").on("value", snapshot => {
            let energyDatas = [];
            snapshot.forEach(snap => {
              energyDatas.push(snap.val());
            });
            this.setState({ energy: energyDatas });
          });
    }

    render(){
        return(
            <div class="box">
            <Button href="/" variant="info">BACK</Button>{' '}
            <h2>questions</h2>
            {this.state.energy.map(energy => {
                return (
                    <div key={energy.energy_id}>
                        {energy.energyLevel}
                    </div>
                );
            })}
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
            <Button onClick={handleClick} href="/" variant="info">SUBMIT</Button>{' '}
        </div>
        );
    }
}*/