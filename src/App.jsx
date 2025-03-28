import React from "react";
import { useCharacterCount } from "./hooks/useCharacterCount";
import TextArea from "./components/TextArea";
import ProgressBar from "./components/ProgressBar";
import CopyButton from "./components/CopyButton";
import "./index.css";

const App = () => {
    const { state, updateText, progress, warning } = useCharacterCount();

    return (
        <div className="app-container">
            <h1>Real-Time Character Counter</h1>
            <TextArea text={state.text} updateText={updateText} />
            <p className="char-count">{state.count} / 200</p>
            <ProgressBar progress={progress} warning={warning} />
            {warning && <p className="warning-text">Warning: Approaching limit!</p>}
            <CopyButton text={state.text} />
        </div>
    );
};

export default App;
