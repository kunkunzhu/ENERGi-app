import styles from "./Graph.css"
import React from "react"


function Graph() {

    return (
        <div className={styles.Graph}>
            <canvas id="myChart" width="400" height="400"></canvas>

        </div>
    )

}

export default Graph