import React from "react";
import "../index.css";

const TextArea = ({ text, updateText }) => {
    return (
        <textarea
            value={text}
            onChange={(e) => updateText(e.target.value)}
            placeholder="Type something..."
            rows={5}
            className="text-area"
        />
    );
};

export default TextArea;