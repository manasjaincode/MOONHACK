import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ClubWalletSummary() {
  const [onChainLogs, setOnChainLogs] = useState([]);
  const [totalOnChain, setTotalOnChain] = useState(0);

  const ethToInr = 185000; // Fake ETH->INR rate for demo

  const motionValue = useMotionValue(0);
  const animatedInr = useSpring(motionValue, { stiffness: 80, damping: 20 });
  const displayInr = useTransform(animatedInr, (value) =>
    `₹ ${Math.round(value).toLocaleString("en-IN")}`
  );

  useEffect(() => {
    const loadLogs = async () => {
      if (typeof window !== "undefined") {
        const { fetchTransactionLogs } = await import("@/lib/blockchainUtils");
        const logs = await fetchTransactionLogs();
        setOnChainLogs(logs);
        const totalEth = logs.reduce((sum, log) => sum + parseFloat(log.amount), 0);
        setTotalOnChain(totalEth);
        motionValue.set(totalEth * ethToInr); // smooth INR animation
      }
    };
    loadLogs();
  }, [motionValue]);

  return (
    <div className="bg-black border border-gray-600 p-4 rounded-2xl shadow-lg w-full max-w-2xl mx-auto mt-6">
      <h2 className="text-xl text-white font-bold mb-4">Club Wallet Overview</h2>

      <div className="mb-4 space-y-2">
        <p className="text-gray-300 text-lg">
          💰 On-Chain Balance:{" "}
          <span className="text-green-400">{totalOnChain.toFixed(2)} ETH</span>
        </p>
        <motion.p className="text-green-400 text-2xl font-extrabold">
          {displayInr}
        </motion.p>
      </div>

      <h3 className="text-lg text-white font-semibold mb-2">
        Recent Blockchain Logs (Dean View)
      </h3>
      <div className="space-y-2 max-h-48 overflow-y-auto">
        {onChainLogs.map((log, idx) => (
          <div
            key={idx}
            className="p-3 rounded-lg border border-gray-500 bg-gray-900"
          >
            <p className="text-gray-200 text-sm">🔗 Purpose: {log.purpose}</p>
            <p className="text-gray-400 text-xs">Amount: {log.amount} ETH</p>
            <p className="text-gray-500 text-xs">TX Hash: {log.txHash.slice(0, 10)}...</p>
          </div>
        ))}
        {onChainLogs.length === 0 && (
          <p className="text-gray-500">No logs found.</p>
        )}
      </div>
    </div>
  );
}
