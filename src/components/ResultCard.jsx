function ResultCard({ result, biasType }) {
  const getBiasLabel = () => {
    if (biasType === "fear") return "Emotional Bias: Fear";
    if (biasType === "growth") return "Emotional Bias: Growth";
    if (biasType === "logic") return "Logical Bias";
    return "General Guidance";
  };

  const getBiasStyle = () => {
    if (biasType === "fear") {
      return "border border-red-400/30 bg-red-500/20 text-red-300";
    }

    if (biasType === "growth") {
      return "border border-emerald-400/30 bg-emerald-500/20 text-emerald-300";
    }

    if (biasType === "logic") {
      return "border border-blue-400/30 bg-blue-500/20 text-blue-300";
    }

    return "border border-zinc-600 bg-zinc-700 text-zinc-200";
  };

  return (
    <div className="mt-8">
      <h2 className="mb-3 text-lg font-semibold text-zinc-200">Response</h2>

      <div className="flex min-h-[140px] flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
        <p className="text-lg leading-relaxed text-zinc-100 md:text-xl">
          {result || "Your result will appear here after you submit a decision."}
        </p>

        {(result || biasType) && (
          <div className="mt-5">
            <span
              className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${getBiasStyle()}`}
            >
              {getBiasLabel()}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultCard;