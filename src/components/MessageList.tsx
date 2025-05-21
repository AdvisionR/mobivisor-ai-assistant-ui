import Message from "@/features/chat/components/Message";
import { ChatMessage } from "@/features/chat/types";
import { useEffect, useRef } from "react";

interface MessageListProps {
    messages: ChatMessage[];
    isLoading: boolean;
}

export default function MessageList({ messages, isLoading }: MessageListProps) {
    const bottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex-1 overflow-y-auto px-4 space-y-4 custom-scrollbar">
            {messages.map((message, index) => (
                <Message key={index} role={message.role} content={message.content} sources={message.sources} />
            ))}
            {isLoading && <p className="text-gray-400 text-sm italic">Thinking...</p>}
            <div ref={bottomRef} />
        </div>
    )
}