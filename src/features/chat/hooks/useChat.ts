import { useState } from "react";
import { ChatMessage } from "@/features/chat/types";
import { sendChatMessage } from "@/features/chat/services/chatService";
import { useSelectedChat } from '@/features/chat/stores/useSelectedChat';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { saveChatMessage } from '@/features/chat/services/saveChatMessage';

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { chatUuid } = useSelectedChat();
  const user = useAuthStore((state) => state.user);

  const sendMessage = async (userMessage: string) => {
    const newMessage: ChatMessage = { role: "user", content: userMessage };
    setMessages((prev) => [...prev, newMessage]);
    setIsLoading(true);

    const response = await sendChatMessage([...messages, newMessage]);
    setMessages((prev) => [...prev, { 
      role: "assistant", 
      content: response.content, 
      sources: response.sources 
    }]);

    setIsLoading(false);
  };

  return { messages, sendMessage, isLoading };
}
