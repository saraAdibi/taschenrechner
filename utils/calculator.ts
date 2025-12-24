export function normalizeExpression(expr: string) {
    let normalized = expr.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-");

    normalized = normalized.replace(/(\d+\.?\d*)%/g, (_, num, offset, str) => {
        const before = str.slice(0, offset);
        const operatorMatch = before.match(/([+\-*/])\s*$/);
        if (operatorMatch && (operatorMatch[1] === "+" || operatorMatch[1] === "-")) {
            const baseExpr = before.slice(0, operatorMatch.index);
            const base = baseExpr ? Function(`return (${baseExpr})`)() : 0;
            return ((base * parseFloat(num)) / 100).toString();  // ✅ تبدیل به رشته
        }
        return (parseFloat(num) / 100).toString();  // ✅ تبدیل به رشته
    });


    return normalized;
}

export function evaluateExpression(expr: string) {
    try {
        const jsExpr = normalizeExpression(expr);
        const result = Function(`'use strict'; return (${jsExpr})`)();
        return Math.round(result * 1e8) / 1e8;
    } catch {
        return "Error";
    }
}

export function getLastNumber(expr: string) {
    const match = expr.match(/(-?\d+\.?\d*)$/);
    return match ? match[0] : null;
}

export function replaceLastNumber(expr: string, newNumber: string) {
    return expr.replace(/(-?\d+\.?\d*)$/, newNumber);
}
