import { ChatMessage } from "@/features/chat/types";
import { usePdfStore } from "@/features/chat/stores/pdfStore"; 
import { ScrollTextIcon } from "lucide-react";
import Image from "next/image";

export default function Message({ role, content, sources }: ChatMessage) {
    const isUser = role === "user";
    const openPdf = usePdfStore((state) => state.openPdf);

    const getSourceText = (id: string) => {
        const pageStr = id.split(':')[1];
        return `Page: ${pageStr}`;
    };

    const systemLogo = "/favicon.png";

    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
            {!isUser && (
                <div className="mr-2 flex-shrink-0">
                    <Image src={systemLogo} alt="System" width={32} height={32} className="rounded-full" />
                </div>
            )}

            <div
                className={`
                    px-4 py-3 rounded-lg text-sm leading-relaxed 
                    ${isUser
                        ? "bg-gray-600 text-white self-end order-1 max-w-[60%]"
                        : "bg-[#2c2c2f] text-gray-300 self-start max-w-full w-full"
                    }
                `}
            >
                <p>{content}</p>

                {sources && sources.length > 0 && (
                    <div className="mt-2 border-t border-gray-700 pt-2 text-xs text-blue-400">
                        <div className="flex flex-wrap gap-2">
                            {sources.map((source, index) => (
                                <button
                                    key={index}
                                    onClick={() => openPdf(source)}
                                    className="flex items-center gap-1 px-2 py-1 bg-gray-700 rounded hover:underline truncate max-w-[250px] text-left cursor-pointer"
                                    title={source.id}
                                >
                                    <ScrollTextIcon className="w-5 h-5" />
                                    <span className="truncate">{getSourceText(source.id)}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
