'use client';

import { useState } from 'react';
import Image from 'next/image';
import booksData from '@/data/books.json';
import { Book } from '@/types';

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const { books } = booksData;
  
  // Filter books that have reviews
  const reviewedBooks = books.filter(book => book.review);
  
  // Filter books based on search term (title and author)
  const filteredBooks = reviewedBooks.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Book Reviews</h1>
          <p className="text-lg text-foreground mb-8">
            Discover my thoughts on the books I've read
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 pr-4 bg-card-bg border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-burgundy focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-foreground">
            Showing {filteredBooks.length} of {reviewedBooks.length} reviews
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Reviews Grid - 4 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
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
              <div className="flex items-center space-x-1 mb-3">
                {renderStars(book.rating || 0)}
                <span className="text-sm text-foreground ml-1">
                  {book.rating}/5
                </span>
              </div>
              <p className="text-sm text-foreground line-clamp-4 mb-3">
                {book.review}
              </p>
              <p className="text-xs text-accent-green">
                Read on {new Date(book.dateRead || '').toLocaleDateString()}
              </p>
              <div className="mt-3">
                <span className="text-accent-burgundy text-sm font-medium hover:text-accent-green transition-colors">
                  Read full review →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredBooks.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-foreground text-lg">
              No reviews found for "{searchTerm}"
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 text-accent-burgundy hover:text-accent-green transition-colors"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
