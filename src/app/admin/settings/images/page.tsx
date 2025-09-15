"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ImagesPage() {
    const [imageGenEnabled, setImageGenEnabled] = useState(false);
    const [imageEngine, setImageEngine] = useState("openai");
    const [apiKey, setApiKey] = useState("");
    const [apiVersion, setApiVersion] = useState("");

    return (
        <div className="bg-[#1e1e20] text-white p-6 rounded-lg space-y-8">
            <h2 className="text-lg font-semibold mb-4">Image Settings</h2>

            {/* Image Generation Switch */}
            <div className="flex justify-between items-center">
                <span>Image Generation (Experimental)</span>
                <Switch
                    checked={imageGenEnabled}
                    onCheckedChange={setImageGenEnabled}
                    className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                />
            </div>

            {/* Image Generation Engine */}
            <div>
                <p className="text-sm mb-1">Image Generation Engine</p>
                <Select value={imageEngine} onValueChange={setImageEngine}>
                    <SelectTrigger className="w-64 bg-gray-800 border border-gray-700">
                        <SelectValue placeholder="Select Engine" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="openai">OpenAI</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* API Config */}
            <div>
                <p className="text-sm mb-1">OpenAI API Config</p>
                <input
                    type="text"
                    placeholder="https://api.openai.com/v1"
                    className="w-full px-2 py-1 bg-gray-800 border border-gray-700 rounded text-sm"
                />
            </div>

            {/* API Key */}
            <div>
                <p className="text-sm mb-1">API Key</p>
                <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter API Key"
                    className="w-full px-2 py-1 bg-gray-800 border border-gray-700 rounded text-sm"
                />
            </div>

            {/* API Version */}
            <div>
                <p className="text-sm mb-1">API Version</p>
                <input
                    type="text"
                    value={apiVersion}
                    onChange={(e) => setApiVersion(e.target.value)}
                    placeholder="Enter API Version"
                    className="w-full px-2 py-1 bg-gray-800 border border-gray-700 rounded text-sm"
                />
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
