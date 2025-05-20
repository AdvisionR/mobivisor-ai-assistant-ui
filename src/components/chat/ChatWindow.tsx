'use client';

import React, {useState} from "react";
import { askQuestion } from '@/services/api';

export const ChatWindow = () => {
    const [messages, setMessages] = useState<{role: string; content: string}[]>([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        setMessages(prev => [...prev, {role: 'user', content: 'input'}]);
        const response = await askQuestion(input);
        setMessages(prev => [...prev, {role: 'assistant', content: response.answer}])
        setInput('');
    }

    return (
        <div className="flex flex-col flex-grow p-4 overflow-auto">
            <div className="flex-1 space-y-2">
                {messages.map((message, index) => (
                    <div key={index} className={`p-2 rounded ${message.role} === 'user' ? 'bg-blue-100' : 'bg-gray-200'}`}>
                        <strong>{message.role}:</strong> {message.content}
                    </div>
                ))}
            </div>

            <div className="mt-4 flex">
                <input 
                    value={input} 
                    onChange={e => setInput(e.target.value)}
                    className="flex-grow p-2 border rounded mr-2"
                    placeholder="Ask anything"
                />
                <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded">
                    Send
                </button>
            </div>
        </div>
    )
}