export default function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-5 py-4 rounded-xl bg-[--color-card] border border-[--color-border]">
      <p className="text-2xl font-bold text-[--color-text]">{value}</p>
      <p className="text-xs text-[--color-text-muted] mt-1">{label}</p>
    </div>
  );
}
