import { ArrowUpIcon } from "lucide-react";
import { useState } from "react";

interface ChatInputProps {
    onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        onSend(input);
        setInput("");
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 border-t border-zinc-700 bg-[#1e1e20] flex gap-2">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything..."
                className="flex-1 p-3 rounded-md bg-[#2c2c2f] text-white placeholder-gray-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                disabled={!input.trim()}
                className="px-4 py-2 text-black transition cursor-pointer rounded-full bg-white hover:bg-gray-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
                <ArrowUpIcon className="w-5 h-5" />
            </button>

        </form>
    )
}