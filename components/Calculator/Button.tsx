type ButtonProps = {
    label: string;
    onPress: () => void;
};

export default function Button({ label, onPress }: ButtonProps) {
    return (
        <button
            onClick={onPress}
            className={`py-4 rounded-xl text-lg font-semibold shadow-lg transition transform hover:scale-105 active:scale-95
        ${label === "C" ? "bg-red-600 hover:bg-red-500 text-white" :
                    label === "DEL" ? "bg-gray-600 hover:bg-gray-500 text-white" :
                        label === "=" ? "bg-blue-500 hover:bg-blue-400 text-white" :
                            label === "%" || label === "±" ? "bg-gray-600 hover:bg-gray-500 text-white" :
                                ["÷", "×", "−", "+"].includes(label) ? "bg-orange-400 hover:bg-yellow-500 text-black" :
                                    "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
        >
            {label}
        </button>
    );
}
