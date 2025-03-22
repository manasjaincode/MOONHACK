// /src/components/ClubWallet/SpendingApprovals.js
import { useEffect, useState } from "react";
import data from "@/data/fakeBlockchain.json";

export default function SpendingApprovals() {
  const [pending, setPending] = useState([]);

  useEffect(() => {
    setPending(data.pendingApprovals);
  }, []);

  const handleAction = (id, action) => {
    setPending((prev) => prev.filter((req) => req.id !== id));
    // In hackathon, just updating the UI (no real backend)
    console.log(`Dean ${action} request ID: ${id}`);
  };

  return (
    <div className="bg-black border border-gray-600 p-4 rounded-2xl shadow-lg w-full max-w-2xl mx-auto mt-6">
      <h2 className="text-xl text-white font-bold mb-4">Pending Spending Requests</h2>
      <div className="space-y-3">
        {pending.map((req) => (
          <div
            key={req.id}
            className="p-3 rounded-lg border border-gray-500 bg-gray-900 flex justify-between items-center"
          >
            <div>
              <p className="text-gray-200 text-sm font-semibold">{req.club} - {req.purpose}</p>
              <p className="text-gray-400 text-xs">Amount: {req.amount}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleAction(req.id, "approved")}
                className="px-3 py-1 bg-green-500 text-white text-xs rounded"
              >
                Approve
              </button>
              <button
                onClick={() => handleAction(req.id, "rejected")}
                className="px-3 py-1 bg-red-500 text-white text-xs rounded"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
        {pending.length === 0 && <p className="text-gray-500">No pending requests 🎉</p>}
      </div>
    </div>
  );
}
