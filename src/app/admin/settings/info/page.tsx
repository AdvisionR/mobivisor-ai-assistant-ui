"use client";

import { Download } from "lucide-react";

export default function DocumentInfoPanel() {
  const chunkSize = 1000;
  const chunkOverlap = 100;
  const embeddingModel = "sentence-transformers/all-MiniLM-L6-v2";
  const topK = 3;

  return (
    <div className="bg-[#1e1e20] text-white p-6 rounded-lg w-full mx-auto space-y-6">
      <h2 className="text-xl font-semibold text-left">Document Processing Details</h2>

      <div className="flex flex-col gap-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">Chunk Size</span>
            <span className="text-sm font-medium">{chunkSize}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">Chunk Overlap</span>
            <span className="text-sm font-medium">{chunkOverlap}</span>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-gray-400">Embedding Model</p>
          <div className="flex items-center justify-between bg-gray-800 px-3 py-2 rounded border border-gray-700">
            <span className="text-sm break-all">{embeddingModel}</span>
            <button className="hover:bg-gray-700 p-1 rounded" title="Download embedding model">
              <Download size={16} />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Top K</span>
          <span className="text-sm font-medium">{topK}</span>
        </div>
      </div>
    </div>
  );
}
