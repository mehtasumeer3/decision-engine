function DecisionForm({ value, onChange, onSubmit }) {
  const isDisabled = !value.trim();

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label htmlFor="decision" className="block text-sm text-zinc-300">
        What decision are you trying to make?
      </label>

      <input
        id="decision"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Example: Should I join the gym or focus on my studies?"
        className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-500 outline-none focus:border-zinc-500"
      />

      <button
        type="submit"
        disabled={isDisabled}
        className="w-full rounded-xl bg-white py-3 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Get suggestion
      </button>
    </form>
  );
}

export default DecisionForm;