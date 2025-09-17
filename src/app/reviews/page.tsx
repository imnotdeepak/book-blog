export const metadata = {
  title: "Reviews",
};

export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Reviews</h1>
      <p className="text-sm/6 text-black/70 dark:text-white/70">
        A collection of recent and past book reviews.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, index) => (
          <article
            key={index}
            className="border border-black/10 dark:border-white/10 rounded-lg overflow-hidden hover:shadow-sm transition-shadow"
          >
            <div className="bg-black/5 dark:bg-white/10 aspect-[3/4]" />
            <div className="p-4 space-y-2">
              <h2 className="font-medium">Book Title {index + 1}</h2>
              <p className="text-sm text-black/70 dark:text-white/70 line-clamp-2">
                Short review excerpt goes here to tease the full review.
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
