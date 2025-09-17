import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Featured review */}
      <section
        aria-labelledby="featured-heading"
        className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch"
      >
        <div className="md:col-span-3 rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
          <div className="relative aspect-[16/9]">
            <Image
              src="https://res.cloudinary.com/dc2hdli0g/image/upload/v1757195618/red_rising_yeocpl.jpg"
              alt="Red Rising book cover"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </div>
        </div>
        <div className="md:col-span-2 flex flex-col justify-center gap-3">
          <h2
            id="featured-heading"
            className="text-xl font-semibold tracking-tight"
          >
            Latest Review: Book Title
          </h2>
          <p className="text-sm/6 text-black/70 dark:text-white/70">
            A short blurb about the latest reviewed book. This is a teaser that
            invites readers to click through and read the full review.
          </p>
          <div>
            <a
              href="/reviews"
              className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              Read the review
            </a>
          </div>
        </div>
      </section>

      {/* Latest reviews grid */}
      <section aria-labelledby="latest-heading" className="space-y-4">
        <h2 id="latest-heading" className="text-lg font-semibold">
          Latest Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <article
              key={index}
              className="border border-black/10 dark:border-white/10 rounded-lg overflow-hidden hover:shadow-sm transition-shadow"
            >
              <div className="bg-black/5 dark:bg-white/10 aspect-[3/4]" />
              <div className="p-4 space-y-1">
                <h3 className="font-medium">Review Title {index + 1}</h3>
                <p className="text-xs text-black/70 dark:text-white/70 line-clamp-2">
                  Short excerpt from the review goes here.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Currently reading shelf */}
      <section aria-labelledby="reading-heading" className="space-y-3">
        <h2 id="reading-heading" className="text-lg font-semibold">
          Currently Reading
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="w-28 shrink-0">
              <div className="aspect-[3/4] rounded-md bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10" />
              <div className="mt-2 h-2 w-24 bg-black/10 dark:bg-white/10 rounded" />
            </div>
          ))}
        </div>
      </section>

      {/* Need to review shelf */}
      <section aria-labelledby="need-review-heading" className="space-y-3">
        <h2 id="need-review-heading" className="text-lg font-semibold">
          Needs Review
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="w-28 shrink-0">
              <div className="aspect-[3/4] rounded-md bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10" />
              <div className="mt-2 h-2 w-24 bg-black/10 dark:bg-white/10 rounded" />
            </div>
          ))}
        </div>
      </section>

      {/* TBR shelf */}
      <section aria-labelledby="tbr-heading" className="space-y-3">
        <h2 id="tbr-heading" className="text-lg font-semibold">
          To Be Reviewed (TBR)
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {Array.from({ length: 14 }).map((_, index) => (
            <div key={index} className="w-28 shrink-0">
              <div className="aspect-[3/4] rounded-md bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10" />
              <div className="mt-2 h-2 w-24 bg-black/10 dark:bg-white/10 rounded" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
