import { useState, useEffect, useMemo, useCallback, useReducer } from "react";

const MAX_LIMIT = 200;

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_TEXT":
            return action.payload.length <= MAX_LIMIT
                ? { ...state, text: action.payload, count: action.payload.length }
                : state;
        case "RESET":
            return { text: "", count: 0 };
        default:
            return state;
    }
};

export const useCharacterCount = () => {
    const [state, dispatch] = useReducer(reducer, { text: "", count: 0 });

    const updateText = useCallback((newText) => {
        dispatch({ type: "UPDATE_TEXT", payload: newText });
    }, []);

    const progress = useMemo(() => (state.count / MAX_LIMIT) * 100, [state.count]);
    const warning = useMemo(() => state.count >= 0.9 * MAX_LIMIT, [state.count]);

    return { state, updateText, progress, warning };
};
