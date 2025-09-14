"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CodeExecutionPage() {
    const [enableExecution, setEnableExecution] = useState(false);
    const [enableInterpreter, setEnableInterpreter] = useState(false);
    const [engine, setEngine] = useState("pyodide");
    const [interpreterEngine, setInterpreterEngine] = useState("pyodide");
    const [promptTemplate, setPromptTemplate] = useState("");

    return (
        <div className="bg-[#1e1e20] text-white p-6 rounded-lg space-y-8">
            {/* General Section */}
            <div>
                <h2 className="text-lg font-semibold mb-4">General</h2>
                <div className="space-y-4">
                    {/* Enable Code Execution */}
                    <div className="flex justify-between items-center">
                        <span>Enable Code Execution</span>
                        <Switch
                            checked={enableExecution}
                            onCheckedChange={setEnableExecution}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>

                    {/* Code Execution Engine */}
                    <div>
                        <p className="text-sm mb-1">Code Execution Engine</p>
                        <Select value={engine} onValueChange={setEngine}>
                            <SelectTrigger className="w-64 bg-gray-800 border border-gray-700">
                                <SelectValue placeholder="Select Engine" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="pyodide">Pyodide</SelectItem>
                                <SelectItem value="docker">Docker</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            {/* Code Interpreter Section */}
            <div>
                <h2 className="text-lg font-semibold mb-4">Code Interpreter</h2>
                <div className="space-y-4">
                    {/* Enable Code Interpreter */}
                    <div className="flex justify-between items-center">
                        <span>Enable Code Interpreter</span>
                        <Switch
                            checked={enableInterpreter}
                            onCheckedChange={setEnableInterpreter}
                            className="cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>

                    {/* Code Interpreter Engine */}
                    <div>
                        <p className="text-sm mb-1">Code Interpreter Engine</p>
                        <Select value={interpreterEngine} onValueChange={setInterpreterEngine}>
                            <SelectTrigger className="w-64 bg-gray-800 border border-gray-700">
                                <SelectValue placeholder="Select Engine" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="pyodide">Pyodide</SelectItem>
                                <SelectItem value="docker">Docker</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Code Interpreter Prompt Template */}
                    <div>
                        <p className="text-sm mb-1">Code Interpreter Prompt Template</p>
                        <textarea
                            value={promptTemplate}
                            onChange={(e) => setPromptTemplate(e.target.value)}
                            placeholder="Leave empty to use the default prompt, or enter a custom prompt"
                            rows={3}
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
