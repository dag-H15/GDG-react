import React from "react";
import "../index.css";

const ProgressBar = ({ progress, warning }) => {
    return (
        <div className="progress-bar-container">
            <div
                className={warning ? "progress-bar warning" : "progress-bar"}
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
