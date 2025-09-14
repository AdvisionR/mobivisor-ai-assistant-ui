"use client";

import { Database, Download } from "lucide-react";

export default function DatabasePage() {
    return (
        <div className="bg-[#1e1e20] text-white p-6 rounded-lg space-y-8">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Database size={18} /> Database
            </h2>

            <div className="space-y-3">
                <button className="w-full flex items-center justify-between bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded text-sm cursor-pointer transition-colors">
                    Import Config from JSON File <Download size={16} />
                </button>

                <button className="w-full flex items-center justify-between bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded text-sm cursor-pointer transition-colors">
                    Export Config to JSON File <Download size={16} />
                </button>

                <button className="w-full flex items-center justify-between bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded text-sm cursor-pointer transition-colors">
                    Download Database <Download size={16} />
                </button>

                <button className="w-full flex items-center justify-between bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded text-sm cursor-pointer transition-colors">
                    Export All Chats (All Users) <Download size={16} />
                </button>

                <button className="w-full flex items-center justify-between bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded text-sm cursor-pointer transition-colors">
                    Export Users <Download size={16} />
                </button>
            </div>
        </div>
    );
}
