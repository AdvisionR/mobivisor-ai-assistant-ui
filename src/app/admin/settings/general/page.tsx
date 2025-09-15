"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export default function GeneralPage() {
    const [enableSignUps, setEnableSignUps] = useState(true);
    const [enableApiKey, setEnableApiKey] = useState(true);
    const [communitySharing, setCommunitySharing] = useState(true);
    const [messageRating, setMessageRating] = useState(true);
    const [notesBeta, setNotesBeta] = useState(false);
    const [channelsBeta, setChannelsBeta] = useState(true);

    return (
        <div className="bg-[#1e1e20] text-white p-6 rounded-lg space-y-8">
            {/* Version & Help */}
            <section>
                <h2 className="text-xl font-semibold mb-4">General</h2>
                <div className="flex items-center justify-between mb-2">
                    <div>
                        <p className="text-sm">Version</p>
                        <p className="text-gray-400">v0.6.28 (latest)</p>
                    </div>
                    <button className="text-sm text-blue-400 hover:underline cursor-pointer">
                        Check for updates
                    </button>
                </div>
                <div className="text-sm text-gray-400 space-y-1">
                    <p>Discover how to use Open WebUI and seek support from the community.</p>
                    <div className="flex gap-2 mt-2">
                        {["Discord", "Open WebUI", "GitHub"].map((btn) => (
                            <button
                                key={btn}
                                className="bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 text-xs cursor-pointer transition-colors"
                            >
                                {btn}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Authentication */}
            <section>
                <h3 className="text-lg font-semibold mb-2">Authentication</h3>
                <div className="space-y-4 text-sm">
                    <div className="flex justify-between items-center">
                        <span>Enable New Sign Ups</span>
                        <Switch
                            checked={enableSignUps}
                            onCheckedChange={setEnableSignUps}
                            className={cn(
                                "cursor-pointer",
                                enableSignUps ? "data-[state=checked]:bg-green-500" : "data-[state=unchecked]:bg-gray-600"
                            )}
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Show Admin Details in Account Pending Overlay</span>
                        <Switch
                            checked={false}
                            onCheckedChange={() => { }}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>
                    <div>
                        <p className="text-gray-300 mb-1">Pending User Overlay Title</p>
                        <input
                            type="text"
                            placeholder="Enter title"
                            className="w-full px-2 py-1 rounded bg-gray-800 border border-gray-700 text-sm cursor-pointer"
                        />
                    </div>
                    <div>
                        <p className="text-gray-300 mb-1">Pending User Overlay Content</p>
                        <textarea
                            placeholder="Enter content"
                            className="w-full px-2 py-1 rounded bg-gray-800 border border-gray-700 text-sm h-20 cursor-pointer"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Enable API Key</span>
                        <Switch
                            checked={enableApiKey}
                            onCheckedChange={setEnableApiKey}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>
                    <div>
                        <p className="text-gray-300 mb-1">API Key Endpoint Restrictions</p>
                        <input
                            type="text"
                            placeholder="Enter restrictions"
                            className="w-full px-2 py-1 rounded bg-gray-800 border border-gray-700 text-sm cursor-pointer"
                        />
                    </div>
                    <div>
                        <p className="text-gray-300 mb-1">JWT Expiration</p>
                        <input
                            type="text"
                            placeholder="-1"
                            className="w-full px-2 py-1 rounded bg-gray-800 border border-gray-700 text-sm cursor-pointer"
                        />
                    </div>
                </div>
            </section>

            {/* Features */}
            <section>
                <h3 className="text-lg font-semibold mb-2">Features</h3>
                <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                        <span>Enable Community Sharing</span>
                        <Switch
                            checked={communitySharing}
                            onCheckedChange={setCommunitySharing}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Enable Message Rating</span>
                        <Switch
                            checked={messageRating}
                            onCheckedChange={setMessageRating}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Notes (Beta)</span>
                        <Switch
                            checked={notesBeta}
                            onCheckedChange={setNotesBeta}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Channels (Beta)</span>
                        <Switch
                            checked={channelsBeta}
                            onCheckedChange={setChannelsBeta}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>
                </div>
            </section>

            {/* Save Button */}
            <div className="flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-sm cursor-pointer transition-colors">
                    Save
                </button>
            </div>
        </div>
    );
}
