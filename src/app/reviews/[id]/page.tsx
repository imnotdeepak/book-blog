import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import booksData from '@/data/books.json';

interface ReviewPageProps {
  params: {
    id: string;
  };
}

export default function ReviewPage({ params }: ReviewPageProps) {
  const { books } = booksData;
  const book = books.find(b => b.id === params.id);

  if (!book || !book.review) {
    notFound();
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-2xl ${
          i < rating ? 'text-highlight-gold' : 'text-border-color'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/reviews"
            className="inline-flex items-center text-accent-burgundy hover:text-accent-green transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Reviews
          </Link>
        </div>

        {/* Review Content */}
        <article className="bg-card-bg rounded-lg shadow-lg p-8 border border-border-color">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Book Cover */}
            <div className="flex justify-center">
              <Image
                src={book.coverImage}
                alt={`${book.title} cover`}
                width={300}
                height={450}
                className="rounded-lg shadow-md"
              />
            </div>

            {/* Book Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  {book.title}
                </h1>
                <p className="text-xl text-accent-burgundy font-medium mb-4">
                  by {book.author}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                {renderStars(book.rating || 0)}
                <span className="text-lg text-foreground ml-2">
                  {book.rating}/5 stars
                </span>
              </div>

              <div className="text-sm text-accent-green">
                Read on {new Date(book.dateRead || '').toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          </div>

          {/* Full Review */}
          <div className="border-t border-border-color pt-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">My Review</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed whitespace-pre-line">
                {book.review}
              </p>
            </div>
          </div>
        </article>

        {/* Related Reviews */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">More Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books
              .filter(b => b.id !== book.id && b.review)
              .slice(0, 3)
              .map((relatedBook) => (
                <Link
                  key={relatedBook.id}
                  href={`/reviews/${relatedBook.id}`}
                  className="bg-card-bg rounded-lg shadow-md p-6 border border-border-color hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src={relatedBook.coverImage}
                      alt={`${relatedBook.title} cover`}
                      width={150}
                      height={225}
                      className="rounded-lg shadow-sm"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                    {relatedBook.title}
                  </h3>
                  <p className="text-accent-burgundy font-medium mb-2">
                    by {relatedBook.author}
                  </p>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${
                          i < (relatedBook.rating || 0) ? 'text-highlight-gold' : 'text-border-color'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="text-sm text-foreground ml-1">
                      {relatedBook.rating}/5
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
