import { useState } from "react";
import DecisionForm from "./components/DecisionForm";
import ResultCard from "./components/ResultCard";
import { generateDecisionResult } from "./utils/decisionEngine";

export default function App() {
  const [decision, setDecision] = useState("");
  const [result, setResult] = useState("");
  const [biasType, setBiasType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const output = generateDecisionResult(decision);

    setResult(output.response);
    setBiasType(output.biasType);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 py-10 text-white">
      <div className="w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl md:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Decision Engine
          </h1>
          <p className="mt-3 text-base text-zinc-400 md:text-lg">
            Enter your decision and get a strong psychology-based suggestion.
          </p>
        </div>

        <DecisionForm
          value={decision}
          onChange={setDecision}
          onSubmit={handleSubmit}
        />

        <ResultCard result={result} biasType={biasType} />
      </div>
    </div>
  );
}
