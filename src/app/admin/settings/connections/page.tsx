"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Plus, Settings, Download } from "lucide-react";

export default function ConnectionsPage() {
    const [openAiEnabled, setOpenAiEnabled] = useState(true);
    const [ollamaEnabled, setOllamaEnabled] = useState(true);
    const [directConnections, setDirectConnections] = useState(false);
    const [cacheModelList, setCacheModelList] = useState(false);

    return (
        <div className="bg-[#1e1e20] text-white p-6 rounded-lg space-y-8">
            <h2 className="text-xl font-semibold">General</h2>

            {/* OpenAI API */}
            <div className="border-b border-gray-700 pb-4">
                <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">OpenAI API</span>
                    <div className="flex items-center gap-2">
                        <Switch
                            checked={openAiEnabled}
                            onCheckedChange={setOpenAiEnabled}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                        <button className="p-1 hover:bg-gray-700 rounded cursor-pointer">
                            <Plus size={14} />
                        </button>
                        <button className="p-1 hover:bg-gray-700 rounded cursor-pointer">
                            <Settings size={14} />
                        </button>
                    </div>
                </div>
                <p className="text-sm text-gray-400 cursor-pointer">https://api.openai.com/v1</p>
            </div>

            {/* Ollama API */}
            <div className="border-b border-gray-700 pb-4">
                <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">Ollama API</span>
                    <div className="flex items-center gap-2">
                        <Switch
                            checked={ollamaEnabled}
                            onCheckedChange={setOllamaEnabled}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                        <button className="p-1 hover:bg-gray-700 rounded cursor-pointer">
                            <Plus size={14} />
                        </button>
                        <button className="p-1 hover:bg-gray-700 rounded cursor-pointer">
                            <Download size={14} />
                        </button>
                        <button className="p-1 hover:bg-gray-700 rounded cursor-pointer">
                            <Settings size={14} />
                        </button>
                    </div>
                </div>
                <p className="text-sm text-gray-400 cursor-pointer">
                    http://host.docker.internal:11434
                </p>
                <p className="text-xs text-blue-400 cursor-pointer hover:underline">
                    Trouble accessing Ollama? Click here for help.
                </p>
            </div>

            {/* Direct Connections */}
            <div className="border-b border-gray-700 pb-4">
                <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">Direct Connections</span>
                    <Switch
                        checked={directConnections}
                        onCheckedChange={setDirectConnections}
                        className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                    />
                </div>
                <p className="text-sm text-gray-400">
                    Direct Connections allow users to connect to their own OpenAI compatible API endpoints.
                </p>
            </div>

            {/* Cache Base Model List */}
            <div>
                <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">Cache Base Model List</span>
                    <Switch
                        checked={cacheModelList}
                        onCheckedChange={setCacheModelList}
                        className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                    />
                </div>
                <p className="text-sm text-gray-400">
                    Base Model List Cache speeds up access by fetching base models only at startup or on settings save—faster, but may not show recent base model changes.
                </p>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-sm cursor-pointer transition-colors">
                    Save
                </button>
            </div>
        </div>
    );
}
