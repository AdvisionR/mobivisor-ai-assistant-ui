import { ChatMessage } from "@/features/chat/types";

export default function Message({ role, content }: ChatMessage) {
    const isUser = role === "user";
    
    return (
      <div
          className={`px-4 py-3 rounded-lg text-sm leading-relaxed ${
              isUser
                  ? "max-w-[60%] bg-gray-600 text-white self-end ml-auto"
                  : "bg-[#2c2c2f] text-gray-300 self-start mr-auto text-left"
          }`}
      >
          {content}
      </div>
  );
  }