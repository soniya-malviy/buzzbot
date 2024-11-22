import { createContext } from "react";
import run from "../config/gemini.js";

export const Context = createContext();

const ContextProvider = (props) => {
    const onSent = async (prompt) => {
        try {
            await run(prompt);
        } catch (error) {
            console.error("Error in onSent:", error);
        }
    };

    // Example of triggering the function
    onSent("What is React JS?");

    const contextValue = {
        onSent, // Provide the function to child components
    };

    return (
        <Context.Provider value={contextValue}>
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
