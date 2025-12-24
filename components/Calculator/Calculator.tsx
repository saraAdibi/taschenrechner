"use client";

import { useContext } from "react";
import Display from "./Display";
import Button from "./Button";
import { CalculatorProvider, CalculatorContext } from "@/context/calculatorContext";

const buttons = [
    ["C", "DEL", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "−"],
    ["1", "2", "3", "+"],
    ["±", "0", ".", "="],
];

function CalculatorContent() {
    const { dispatch } = useContext(CalculatorContext);

    const handlePress = (label: string) => {
        if (!isNaN(Number(label)) || label === ".") {
            dispatch({ type: "NUMBER", value: label });
        } else if (label === "C") {
            dispatch({ type: "CLEAR" });
        } else if (label === "DEL") {
            dispatch({ type: "DELETE" });
        } else if (label === "=") {
            dispatch({ type: "EQUALS" });
        } else if (label === "%") {
            dispatch({ type: "PERCENT" });
        } else if (label === "±") {
            dispatch({ type: "PLUSMINUS" });
        } else {
            dispatch({ type: "OPERATOR", value: label });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4">
            <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl w-80">
                <Display />
                {buttons.map((row, i) => (
                    <div key={i} className="grid grid-cols-4 gap-4 mb-4">
                        {row.map((btn) => (
                            <Button
                                key={btn}
                                label={btn}
                                onPress={() => handlePress(btn)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Calculator() {
    return (
        <CalculatorProvider>
            <CalculatorContent />
        </CalculatorProvider>
    );
}
