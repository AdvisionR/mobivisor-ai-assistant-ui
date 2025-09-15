"use client";

const dummyFeedbacks = [
    { id: 1, text: "Great performance on GPT-4.1", date: "Sep 14, 2025" },
    { id: 2, text: "Need improvements on GPT-3.5", date: "Sep 10, 2025" },
];

export default function FeedbacksPage() {
    return (
        <div className="bg-[#1e1e20] text-white p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Feedbacks</h2>
            <ul className="space-y-3">
                {dummyFeedbacks.map((fb) => (
                    <li key={fb.id} className="p-3 border border-gray-700 rounded">
                        <p className="text-sm">{fb.text}</p>
                        <span className="text-xs text-gray-400">{fb.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
