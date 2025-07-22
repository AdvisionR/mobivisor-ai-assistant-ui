'use client';

import { useEffect, useState } from "react";
import { apiFetch } from "@/shared/lib/fetcher";
import { SERVICE } from "@/shared/constants/service";
import { useAuthStore } from "@/features/auth/store/useAuthStore";

type ChatSummary = {
  uuid: string;
  title: string;
  createdAt: string;
};


export function useChatSidebar() {
    const [chats, setChats] = useState<ChatSummary[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const user = useAuthStore((state) => state.user);

    const fetchChats = async () => {
        if (!user?.uuid) return;
    
        setIsLoading(true);
        setError(null);

        try {
            const response = await apiFetch<{ message: string, data: ChatSummary[] }>(
                SERVICE.CHAT_HISTORY,
                "/api/v1/chats/get-all",
                {
                    method: 'POST',
                    json: {
                        userUuid: user.uuid,
                    },
                }
            );
            setChats(response.data);
        } catch (err: any) {
            setError(err.message || "Failed to fetch chats.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchChats();
  }, [user?.uuid]);

  return { chats, isLoading, error, fetchChats };
}