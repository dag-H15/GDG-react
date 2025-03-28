import React from "react";
import "../index.css";

const CopyButton = ({ text }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
    };
    return (
        <button className="copy-button" onClick={copyToClipboard}>
            Copy Text
        </button>
    );
};

export default CopyButton;
