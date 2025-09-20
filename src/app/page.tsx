import Image from "next/image";
import Link from "next/link";
import booksData from "@/data/books.json";
import { Book } from "@/types";

export default function Home() {
  const { books, currentlyReading, tbr } = booksData;
  const latestReview = books.find(book => book.isLatest);
  const otherReviews = books.filter(book => !book.isLatest).slice(0, 6);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? 'text-highlight-gold' : 'text-border-color'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Latest Review */}
        {latestReview && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Latest Review
            </h2>
            <Link href={`/reviews/${latestReview.id}`} className="block">
              <div className="bg-card-bg rounded-lg shadow-lg p-8 border border-border-color hover:shadow-xl transition-shadow cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="flex justify-center">
                    <Image
                      src={latestReview.coverImage}
                      alt={`${latestReview.title} cover`}
                      width={300}
                      height={450}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {latestReview.title}
                    </h3>
                    <p className="text-lg text-accent-burgundy font-medium">
                      by {latestReview.author}
                    </p>
                    <div className="flex items-center space-x-2">
                      {renderStars(latestReview.rating || 0)}
                      <span className="text-foreground ml-2">
                        {latestReview.rating}/5
                      </span>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {latestReview.review}
                    </p>
                    <p className="text-sm text-accent-green">
                      Read on {new Date(latestReview.dateRead || '').toLocaleDateString()}
                    </p>
                    <div className="pt-4">
                      <span className="text-accent-burgundy font-medium hover:text-accent-green transition-colors">
                        Read full review →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Other Reviews Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Recent Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherReviews.map((book) => (
              <Link
                key={book.id}
                href={`/reviews/${book.id}`}
                className="bg-card-bg rounded-lg shadow-md p-6 border border-border-color hover:shadow-lg transition-shadow block"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={book.coverImage}
                    alt={`${book.title} cover`}
                    width={150}
                    height={225}
                    className="rounded-lg shadow-sm"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-accent-burgundy font-medium mb-2">
                  by {book.author}
                </p>
                <div className="flex items-center space-x-1 mb-2">
                  {renderStars(book.rating || 0)}
                  <span className="text-sm text-foreground ml-1">
                    {book.rating}/5
                  </span>
                </div>
                <p className="text-sm text-foreground line-clamp-3">
                  {book.review}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="bg-accent-burgundy text-white px-6 py-3 rounded-lg hover:bg-accent-green transition-colors font-medium"
            >
              View All Reviews
            </Link>
          </div>
        </section>

        {/* Currently Reading Shelf */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Currently Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentlyReading.map((book) => (
              <div
                key={book.id}
                className="bg-card-bg rounded-lg shadow-md p-6 border border-border-color"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={book.coverImage}
                    alt={`${book.title} cover`}
                    width={150}
                    height={225}
                    className="rounded-lg shadow-sm"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {book.title}
                </h3>
                <p className="text-accent-burgundy font-medium">
                  by {book.author}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TBR (To Be Read) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            To Be Read
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tbr.map((book) => (
              <div
                key={book.id}
                className="bg-card-bg rounded-lg shadow-md p-4 border border-border-color hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-3">
                  <Image
                    src={book.coverImage}
                    alt={`${book.title} cover`}
                    width={120}
                    height={180}
                    className="rounded-lg shadow-sm"
                  />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1 line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-xs text-accent-burgundy font-medium">
                  by {book.author}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
