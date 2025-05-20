import { ChatMessage } from "@/features/chat/types";

export async function sendChatMessage(messages: ChatMessage[]): Promise<string> {
  const lastUserMessage: ChatMessage = messages[messages.length - 1];

  const payload = {
    query: lastUserMessage.content,
    top_k: 5,
    collection: "mobivisor",
  };

  console.log("payload", payload);

  const response = await fetch("http://173.249.57.83:8000/api/v1/document/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  console.log({response});

  if (!response.ok) {
    throw new Error("Failed to fetch response from sendChatMessage method");
  }

  const data = await response.json();
  console.log(data)
  return data.response || "No response.";
}
