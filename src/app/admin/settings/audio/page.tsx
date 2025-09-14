"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AudioPage() {
    const [sttEnabled, setSttEnabled] = useState(false);
    const [ttsEnabled, setTtsEnabled] = useState(false);
    const [sttEngine, setSttEngine] = useState("whisper");
    const [ttsEngine, setTtsEngine] = useState("webapi");
    const [ttsVoice, setTtsVoice] = useState("");
    const [responseSplitting, setResponseSplitting] = useState("punctuation");

    return (
        <div className="bg-[#1e1e20] text-white p-6 rounded-lg space-y-8">
            {/* Speech-to-Text Section */}
            <div>
                <h2 className="text-lg font-semibold mb-4">Speech-to-Text</h2>
                <div className="space-y-4">
                    {/* Supported MIME Types */}
                    <div>
                        <p className="text-sm mb-1">Supported MIME Types</p>
                        <input
                            type="text"
                            placeholder="e.g., audio/wav,audio/mpeg,video/*"
                            className="w-full px-2 py-1 bg-gray-800 border border-gray-700 rounded text-sm"
                        />
                    </div>

                    {/* STT Engine */}
                    <div>
                        <p className="text-sm mb-1">Speech-to-Text Engine</p>
                        <Select value={sttEngine} onValueChange={setSttEngine}>
                            <SelectTrigger className="w-64 bg-gray-800 border border-gray-700">
                                <SelectValue placeholder="Select Engine" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="whisper">Whisper (Local)</SelectItem>
                                <SelectItem value="openai">OpenAI</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* STT Model */}
                    <div>
                        <p className="text-sm mb-1">STT Model</p>
                        <input
                            type="text"
                            defaultValue="base"
                            className="w-full px-2 py-1 bg-gray-800 border border-gray-700 rounded text-sm"
                        />
                    </div>

                    {/* Enable STT */}
                    <div className="flex justify-between items-center">
                        <span>Enable Speech-to-Text</span>
                        <Switch
                            checked={sttEnabled}
                            onCheckedChange={setSttEnabled}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>
                </div>
            </div>

            {/* Text-to-Speech Section */}
            <div>
                <h2 className="text-lg font-semibold mb-4">Text-to-Speech</h2>
                <div className="space-y-4">
                    {/* TTS Engine */}
                    <div>
                        <p className="text-sm mb-1">Text-to-Speech Engine</p>
                        <Select value={ttsEngine} onValueChange={setTtsEngine}>
                            <SelectTrigger className="w-64 bg-gray-800 border border-gray-700">
                                <SelectValue placeholder="Select Engine" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="webapi">Web API</SelectItem>
                                <SelectItem value="openai">OpenAI</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* TTS Voice */}
                    <div>
                        <p className="text-sm mb-1">TTS Voice</p>
                        <input
                            type="text"
                            value={ttsVoice}
                            onChange={(e) => setTtsVoice(e.target.value)}
                            placeholder="Enter TTS Voice"
                            className="w-full px-2 py-1 bg-gray-800 border border-gray-700 rounded text-sm"
                        />
                    </div>

                    {/* Enable TTS */}
                    <div className="flex justify-between items-center">
                        <span>Enable Text-to-Speech</span>
                        <Switch
                            checked={ttsEnabled}
                            onCheckedChange={setTtsEnabled}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>

                    {/* Response Splitting */}
                    <div>
                        <p className="text-sm mb-1">Response Splitting</p>
                        <Select value={responseSplitting} onValueChange={setResponseSplitting}>
                            <SelectTrigger className="w-64 bg-gray-800 border border-gray-700">
                                <SelectValue placeholder="Select Option" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="punctuation">Punctuation</SelectItem>
                                <SelectItem value="paragraphs">Paragraphs</SelectItem>
                                <SelectItem value="none">None</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
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
