import { useContext } from "react";
import { CalculatorContext } from "@/context/calculatorContext";



export default function Display() {
    const { state } = useContext(CalculatorContext)
    return (
        <div className="bg-[var(--calc-display-bg)] rounded-2xl mb-6 p-6 min-h-[120px] flex flex-col justify-end shadow-inner border border-border/50">
            <div className="text-muted-foreground text-base text-right min-h-[24px] mb-2 font-mono opacity-60">
                {state.previousExpression}
            </div>
            <div className="text-foreground text-2xl text-right font-mono break-all leading-tight tracking-tight">
                {state.expression || "0"}
            </div>
        </div>
    )
}
