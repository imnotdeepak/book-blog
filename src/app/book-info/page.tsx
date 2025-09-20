import Image from 'next/image';
import booksData from '@/data/books.json';

export default function BookInfoPage() {
  const { currentlyReading, tbr } = booksData;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Book Info</h1>
          <p className="text-lg text-foreground">
            What I'm currently reading and what's on my reading list
          </p>
        </div>

        {/* Currently Reading */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Currently Reading
          </h2>
          {currentlyReading.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentlyReading.map((book) => (
                <div
                  key={book.id}
                  className="bg-card-bg rounded-lg shadow-lg p-8 border border-border-color"
                >
                  <div className="flex justify-center mb-6">
                    <Image
                      src={book.coverImage}
                      alt={`${book.title} cover`}
                      width={200}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 text-center">
                    {book.title}
                  </h3>
                  <p className="text-accent-burgundy font-medium text-center mb-4">
                    by {book.author}
                  </p>
                  <div className="text-center">
                    <span className="inline-block bg-accent-green text-white px-4 py-2 rounded-full text-sm font-medium">
                      Currently Reading
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-foreground text-lg">
                No books currently being read
              </p>
            </div>
          )}
        </section>

        {/* TBR Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            To Be Read
          </h2>
          {tbr.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tbr.map((book) => (
                <div
                  key={book.id}
                  className="bg-card-bg rounded-lg shadow-md p-6 border border-border-color hover:shadow-lg transition-shadow"
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
                  <p className="text-accent-burgundy font-medium mb-3">
                    by {book.author}
                  </p>
                  <div className="text-center">
                    <span className="inline-block bg-highlight-gold text-white px-3 py-1 rounded-full text-xs font-medium">
                      TBR
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-foreground text-lg">
                No books on the TBR list
              </p>
            </div>
          )}
        </section>

        {/* Reading Stats */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Reading Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card-bg rounded-lg shadow-md p-6 border border-border-color text-center">
              <div className="text-3xl font-bold text-accent-burgundy mb-2">
                {currentlyReading.length}
              </div>
              <div className="text-foreground">Currently Reading</div>
            </div>
            <div className="bg-card-bg rounded-lg shadow-md p-6 border border-border-color text-center">
              <div className="text-3xl font-bold text-accent-green mb-2">
                {tbr.length}
              </div>
              <div className="text-foreground">To Be Read</div>
            </div>
            <div className="bg-card-bg rounded-lg shadow-md p-6 border border-border-color text-center">
              <div className="text-3xl font-bold text-highlight-gold mb-2">
                {currentlyReading.length + tbr.length}
              </div>
              <div className="text-foreground">Total Books</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
