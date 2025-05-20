'use client';

import MessageList from '@/components/MessageList';
import ChatInput from '@/components/ChatInput';
import { useChat } from '@/features/chat/hooks/useChat'; 

export default function ChatPage() {
    const {messages, sendMessage, isLoading} = useChat();

    return (
        <div className="flex flex-col h-full max-h-screen bg-[#1e1e20] text-white">
            <MessageList messages={messages} isLoading={isLoading} />
            <ChatInput onSend={sendMessage} />
        </div>
    )
}