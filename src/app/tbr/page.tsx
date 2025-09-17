export const metadata = {
  title: "To Be Read",
};

export default function TbrPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">To Be Read</h1>
      <p className="text-sm/6 text-black/70 dark:text-white/70">
        Books on my upcoming reading list.
      </p>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {Array.from({ length: 14 }).map((_, index) => (
          <div
            key={index}
            className="w-28 shrink-0"
            title={`TBR Book ${index + 1}`}
          >
            <div className="aspect-[3/4] rounded-md bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10" />
            <div className="mt-2 h-2 w-24 bg-black/10 dark:bg-white/10 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
