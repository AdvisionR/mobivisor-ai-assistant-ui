"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Settings, MoreHorizontal, Pencil } from "lucide-react";

export default function ModelsPage() {
    // Dummy data
    const [models, setModels] = useState([
        { name: "gpt-3.5-turbo", desc: "gpt-3.5-turbo", enabled: true },
        { name: "gpt-3.5-turbo-0125", desc: "gpt-3.5-turbo-0125", enabled: true },
        { name: "gpt-3.5-turbo-1106", desc: "gpt-3.5-turbo-1106", enabled: true },
        { name: "gpt-3.5-turbo-16k", desc: "gpt-3.5-turbo-16k", enabled: true },
        { name: "gpt-4.1", desc: "gpt-4.1", enabled: true },
        { name: "gpt-4.1-mini", desc: "gpt-4.1-mini", enabled: true },
        { name: "gpt-4o", desc: "gpt-4o", enabled: true },
    ]);

    return (
        <div className="bg-[#1e1e20] text-white p-6 rounded-lg space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold ">Models <span className="text-gray-500 ml-1">{models.length}</span></h2>
                <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-700 rounded cursor-pointer">
                        <Settings size={16} />
                    </button>
                </div>
            </div>

            {/* Search */}
            <div>
                <input
                    type="text"
                    placeholder="Search Models"
                    className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-sm text-white focus:outline-none focus:border-blue-500"
                />
            </div>

            {/* List */}
            <div className="space-y-2">
                {models.map((model, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-between p-2 hover:bg-gray-800 rounded transition-colors"
                    >
                        {/* Left side: name + desc */}
                        <div>
                            <p className="font-medium">{model.name}</p>
                            <p className="text-xs text-gray-400">{model.desc}</p>
                        </div>

                        {/* Right side: buttons + switch */}
                        <div className="flex items-center gap-2">
                            <button className="p-1 hover:bg-gray-700 rounded cursor-pointer">
                                <Pencil size={14} />
                            </button>
                            <button className="p-1 hover:bg-gray-700 rounded cursor-pointer">
                                <MoreHorizontal size={14} />
                            </button>
                            <Switch
                                checked={model.enabled}
                                onCheckedChange={(val) => {
                                    const updated = [...models];
                                    updated[idx].enabled = val;
                                    setModels(updated);
                                }}
                                className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                            />
                        </div>
                    </div>
                ))}
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
