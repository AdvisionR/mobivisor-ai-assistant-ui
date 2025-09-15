"use client";

import { Plus } from "lucide-react";

export default function ExternalToolsPage() {
    return (
        <div className="bg-[#1e1e20] text-white p-6 rounded-lg space-y-6">
            <h2 className="text-lg font-semibold">General</h2>
            <div className="flex justify-between items-center">
                <span>Manage Tool Servers</span>
                <button className="p-1 hover:bg-gray-700 rounded cursor-pointer">
                    <Plus size={16} />
                </button>
            </div>
            <p className="text-sm text-gray-400">
                Connect to your own OpenAPI compatible external tool servers.
            </p>
        </div>
    );
}
