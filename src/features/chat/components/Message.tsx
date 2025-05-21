import { ChatMessage } from "@/features/chat/types";
import { usePdfStore } from "@/features/chat/stores/pdfStore"; 

export default function Message({ role, content, sources }: ChatMessage) {
    const isUser = role === "user";
    const openPdf = usePdfStore((state) => state.openPdf);
    
    return (
      <div
          className={`px-4 py-3 rounded-lg text-sm leading-relaxed ${
              isUser
                  ? "max-w-[60%] bg-gray-600 text-white self-end ml-auto"
                  : "bg-[#2c2c2f] text-gray-300 self-start mr-auto text-left"
          }`}
      >
        <p>{content}</p>

        {sources && sources.length > 0 && (
            <div className="mt-2 border-t border-gray-700 pt-2 text-xs text-blue-400">
                <p className="text-gray-400 italic mb-1">Sources:</p>
                <div className="flex flex-wrap gap-2">
                {sources.map((source, index) => (
                    <button
                        key={index}
                        onClick={() => openPdf(source)}
                        className="px-2 py-1 bg-gray-700 rounded hover:underline truncate max-w-[250px] text-left"
                        title={source}
                    >
                        📄 {source}
                    </button>
                ))}
                </div>
            </div>
        )}
      </div>
  );
  }