"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Plus } from "lucide-react";

export default function EvaluationsPage() {
    const [arenaModels, setArenaModels] = useState(true);

    return (
        <div className="bg-[#1e1e20] text-white p-6 rounded-lg space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Arena Models</h2>
                <div className="flex items-center gap-2">
                    <Switch
                        checked={arenaModels}
                        onCheckedChange={setArenaModels}
                        className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                    />
                    <button className="p-1 hover:bg-gray-700 rounded cursor-pointer">
                        <Plus size={16} />
                    </button>
                </div>
            </div>

            {/* Info text */}
            <p className="text-sm text-gray-400">
                Using the default arena model with all models. Click the plus button to add custom models.
            </p>

            {/* Save Button */}
            <div className="flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-sm cursor-pointer transition-colors">
                    Save
                </button>
            </div>
        </div>
    );
}
