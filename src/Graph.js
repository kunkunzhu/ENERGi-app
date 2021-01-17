import styles from "./Graph.css"
import React from "react"
import {Line} from 'react-chartjs-2'

const Graph = (props) =>  {

    const state = {
        labels: ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
        datasets: [
            {
                label: 'today',
                fill: false,
                lineTension: 0.5,
                borderColor: "#3e95cd",
                borderWidth: 2,
                data: props.data
            }
        ]
    };

    return (
        <div className={styles.Graph}>
            <div class="box">
                <h2>today's progress</h2>
                <Line
                    data={state}
                    options={{
                        title:{
                            display:false,
                            text:'Average Rainfall per month',
                            fontSize:20
                        },
                        legend:{
                            display:false,
                            position:'right'
                        }
                    }}
                />
            </div>
        </div>
    )

}

export default Graph