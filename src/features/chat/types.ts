export type Source = {
  id: string;
  text: string;
};

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
};