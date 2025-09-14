"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function WebSearchPage() {
    const [webSearch, setWebSearch] = useState(false);
    const [bypassEmbedding, setBypassEmbedding] = useState(false);
    const [bypassLoader, setBypassLoader] = useState(false);
    const [trustProxy, setTrustProxy] = useState(false);
    const [verifySSL, setVerifySSL] = useState(false);
    const [concurrentReq, setConcurrentReq] = useState(10);
    const [youtubeLang, setYoutubeLang] = useState("en");
    const [youtubeProxy, setYoutubeProxy] = useState("");

    return (
        <div className="bg-[#1e1e20] text-white p-6 rounded-lg space-y-8">
            {/* General Section */}
            <div>
                <h2 className="text-lg font-semibold mb-4">General</h2>
                <div className="space-y-4">
                    {/* Web Search */}
                    <div className="flex justify-between items-center">
                        <span>Web Search</span>
                        <Switch
                            checked={webSearch}
                            onCheckedChange={setWebSearch}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>

                    {/* Web Search Engine */}
                    <div>
                        <p className="text-sm mb-1">Web Search Engine</p>
                        <Select>
                            <SelectTrigger className="w-64 bg-gray-800 border border-gray-700">
                                <SelectValue placeholder="Select a engine" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="google">Google</SelectItem>
                                <SelectItem value="bing">Bing</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Bypass Embedding */}
                    <div className="flex justify-between items-center">
                        <span>Bypass Embedding and Retrieval</span>
                        <Switch
                            checked={bypassEmbedding}
                            onCheckedChange={setBypassEmbedding}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>

                    {/* Bypass Loader */}
                    <div className="flex justify-between items-center">
                        <span>Bypass Web Loader</span>
                        <Switch
                            checked={bypassLoader}
                            onCheckedChange={setBypassLoader}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>

                    {/* Trust Proxy */}
                    <div className="flex justify-between items-center">
                        <span>Trust Proxy Environment</span>
                        <Switch
                            checked={trustProxy}
                            onCheckedChange={setTrustProxy}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>
                </div>
            </div>

            {/* Loader Section */}
            <div>
                <h2 className="text-lg font-semibold mb-4">Loader</h2>
                <div className="space-y-4">
                    {/* Loader Engine */}
                    <div>
                        <p className="text-sm mb-1">Web Loader Engine</p>
                        <Select>
                            <SelectTrigger className="w-64 bg-gray-800 border border-gray-700">
                                <SelectValue placeholder="Default" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="default">Default</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Verify SSL */}
                    <div className="flex justify-between items-center">
                        <span>Verify SSL Certificate</span>
                        <Switch
                            checked={verifySSL}
                            onCheckedChange={setVerifySSL}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>

                    {/* Concurrent Requests */}
                    <div>
                        <p className="text-sm mb-1">Concurrent Requests</p>
                        <input
                            type="number"
                            value={concurrentReq}
                            onChange={(e) => setConcurrentReq(Number(e.target.value))}
                            className="w-24 px-2 py-1 bg-gray-800 border border-gray-700 rounded text-sm"
                        />
                    </div>

                    {/* Youtube Language */}
                    <div>
                        <p className="text-sm mb-1">Youtube Language</p>
                        <input
                            type="text"
                            value={youtubeLang}
                            onChange={(e) => setYoutubeLang(e.target.value)}
                            className="w-32 px-2 py-1 bg-gray-800 border border-gray-700 rounded text-sm"
                        />
                    </div>

                    {/* Youtube Proxy */}
                    <div>
                        <p className="text-sm mb-1">Youtube Proxy URL</p>
                        <input
                            type="text"
                            value={youtubeProxy}
                            onChange={(e) => setYoutubeProxy(e.target.value)}
                            className="w-full px-2 py-1 bg-gray-800 border border-gray-700 rounded text-sm"
                        />
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
