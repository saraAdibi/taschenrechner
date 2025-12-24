import { createContext, useReducer, ReactNode } from "react";
import { evaluateExpression, getLastNumber, replaceLastNumber } from "@/utils/calculator";

type State = {
    expression: string;
    result: number | null;
    previousExpression: string;
};

type Action =
    | { type: "NUMBER"; value: string }
    | { type: "OPERATOR"; value: string }
    | { type: "EQUALS" }
    | { type: "CLEAR" }
    | { type: "DELETE" }
    | { type: "PERCENT" }
    | { type: "PLUSMINUS" };

const initialState: State = { expression: "", result: null, previousExpression: "" };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "NUMBER":
            if (action.value === "." && state.expression.match(/\d+\.\d*$/)) return state;
            if (action.value === "." && state.expression === "") {
                return { ...state, expression: "0." };
            }

            if (state.result !== null)
                return { expression: action.value!, result: null, previousExpression: "" };

            if (state.expression === "0" && action.value !== ".")
                return { ...state, expression: action.value! };


            return { ...state, expression: state.expression + action.value };

        case "OPERATOR":
            if (!state.expression) return state;
            if (/[÷×−+]$/.test(state.expression)) return { ...state, expression: state.expression.slice(0, -1) + action.value };
            if (state.result !== null) return { expression: state.result + action.value!, result: null, previousExpression: "" };
            return { ...state, expression: state.expression + action.value };
        case "EQUALS":
            if (!state.expression || /[÷×−+]$/.test(state.expression)) return state;

            let expr = state.expression;
            let result: number;

            if (expr.includes("%")) {
                const parts = expr.split("%");
                if (parts.length === 2) {
                    const a = Number(parts[0]);
                    const b = Number(parts[1]);
                    result = a % b; // 8 % 3 = 2
                } else if (parts.length === 1) {
                    result = Number(parts[0]);
                } else {
                    result = Number(evaluateExpression(expr.replace(/%/g, "")));
                }
            } else {
                result = Number(evaluateExpression(expr));
            }

            return { expression: result.toString(), result, previousExpression: state.expression };

        case "CLEAR":
            return initialState;
        case "DELETE":
            if (state.result !== null) return initialState;
            return { ...state, expression: state.expression.slice(0, -1) };
        case "PERCENT":
            if (!state.expression) return state;
            if (!state.expression.endsWith("%")) {
                return { ...state, expression: state.expression + "%" };
            }
            return state;

        case "PLUSMINUS":
            const last = getLastNumber(state.expression);
            if (!last) return state;
            const toggled = last.startsWith("-") ? last.slice(1) : "-" + last;
            return { ...state, expression: replaceLastNumber(state.expression, toggled) };
        default:
            return state;
    }
}

export const CalculatorContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export function CalculatorProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <CalculatorContext.Provider value={{ state, dispatch }}>{children}</CalculatorContext.Provider>;
}
