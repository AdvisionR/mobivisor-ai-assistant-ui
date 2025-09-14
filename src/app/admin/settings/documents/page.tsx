"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download } from "lucide-react";

export default function DocumentsPage() {
    const [pdfOcr, setPdfOcr] = useState(false);
    const [bypass, setBypass] = useState(false);
    const [fullContextMode, setFullContextMode] = useState(false);
    const [hybridSearch, setHybridSearch] = useState(false);
    const [topK, setTopK] = useState(3);

    return (
        <div className="bg-[#1e1e20] text-white p-6 rounded-lg space-y-8">
            {/* General Section */}
            <div>
                <h2 className="text-lg font-semibold mb-4">General</h2>
                <div className="space-y-4">
                    {/* Content Extraction Engine */}
                    <div>
                        <p className="text-sm mb-1">Content Extraction Engine</p>
                        <Select>
                            <SelectTrigger className="w-64 bg-gray-800 border border-gray-700">
                                <SelectValue placeholder="Default" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="default">Default</SelectItem>
                                <SelectItem value="custom">Custom Engine</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* PDF OCR */}
                    <div className="flex justify-between items-center">
                        <span>PDF Extract Images (OCR)</span>
                        <Switch
                            checked={pdfOcr}
                            onCheckedChange={setPdfOcr}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>

                    {/* Bypass Embedding */}
                    <div className="flex justify-between items-center">
                        <span>Bypass Embedding and Retrieval</span>
                        <Switch
                            checked={bypass}
                            onCheckedChange={setBypass}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>

                    {/* Text Splitter */}
                    <div>
                        <p className="text-sm mb-1">Text Splitter</p>
                        <Select>
                            <SelectTrigger className="w-64 bg-gray-800 border border-gray-700">
                                <SelectValue placeholder="Default (Character)" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="character">Character</SelectItem>
                                <SelectItem value="sentence">Sentence</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Chunk Size / Overlap */}
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <p className="text-sm">Chunk Size</p>
                            <input
                                type="text"
                                defaultValue="1000"
                                className="w-full px-2 py-1 bg-gray-800 border border-gray-700 rounded text-sm"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm">Chunk Overlap</p>
                            <input
                                type="text"
                                defaultValue="100"
                                className="w-full px-2 py-1 bg-gray-800 border border-gray-700 rounded text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Embedding Section */}
            <div>
                <h2 className="text-lg font-semibold mb-4">Embedding</h2>
                <div className="space-y-4">
                    {/* Embedding Model Engine */}
                    <div>
                        <p className="text-sm mb-1">Embedding Model Engine</p>
                        <Select>
                            <SelectTrigger className="w-64 bg-gray-800 border border-gray-700">
                                <SelectValue placeholder="Default (SentenceTransformers)" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="default">Default</SelectItem>
                                <SelectItem value="openai">OpenAI</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Embedding Model */}
                    <div>
                        <p className="text-sm mb-1">Embedding Model</p>
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                defaultValue="sentence-transformers/all-MiniLM-L6-v2"
                                className="flex-1 px-2 py-1 bg-gray-800 border border-gray-700 rounded text-sm"
                            />
                            <button className="p-1 hover:bg-gray-700 rounded cursor-pointer">
                                <Download size={16} />
                            </button>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                            Warning: If you update or change your embedding model, you will need to re-import all documents.
                        </p>
                    </div>
                </div>
            </div>

            {/* Retrieval Section */}
            <div>
                <h2 className="text-lg font-semibold mb-4">Retrieval</h2>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span>Full Context Mode</span>
                        <Switch
                            checked={fullContextMode}
                            onCheckedChange={setFullContextMode}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Hybrid Search</span>
                        <Switch
                            checked={hybridSearch}
                            onCheckedChange={setHybridSearch}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>
                    <div>
                        <p className="text-sm">Top K</p>
                        <input
                            type="number"
                            value={topK}
                            onChange={(e) => setTopK(Number(e.target.value))}
                            className="w-20 px-2 py-1 bg-gray-800 border border-gray-700 rounded text-sm"
                        />
                    </div>

                    {/* RAG Template */}
                    <div>
                        <p className="text-sm mb-1">RAG Template</p>
                        <textarea
                            rows={8}
                            defaultValue={`### Task:
Respond to the user query using the provided context...`}
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
