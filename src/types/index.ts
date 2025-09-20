export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating?: number;
  review?: string;
  dateRead?: string;
  isCurrentlyReading?: boolean;
  isTBR?: boolean;
}

export interface Review {
  id: string;
  bookId: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  review: string;
  dateRead: string;
  isLatest?: boolean;
}
