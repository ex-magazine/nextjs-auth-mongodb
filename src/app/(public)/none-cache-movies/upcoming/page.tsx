import MovieCard, { IMovieCard } from '@/components/MovieHomepage/MovieCard';
import Paginate from '@/components/MovieHomepage/Paginate';
import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  searchParams?: {
    page?: number;
  };
};

export const metadata: Metadata = {
  title: 'Movie Friends App 2023 | Upcoming',
  description: 'Generated by create next app'
};

async function getUpcomingMovies(page: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_API_KEY}&language=en-US&page=${page}`
  );
  return res.json();
}

const page = async ({ searchParams }: Props) => {
  const page = searchParams?.page || 1;

  const upcomingMovies = await getUpcomingMovies(page);

  return (
    <main className="flex flex-col mt-6">
      <div className="w-[1330px] max-w-full mx-auto flex justify-between items-center mt-10 mb-4 px-4 sm:px-4 md:px-4 lg:px-4 xl:px-8">
        <h1 className="text-2xl font-medium">Upcoming Movies</h1>
      </div>
      <div className="w-[1330px] max-w-full mx-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  
        mx-auto px-4 sm:px-4 md:px-4 lg:px-4 xl:px-8 gap-5"
        >
          {upcomingMovies.results.map((movie: IMovieCard) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
      <Paginate
        currentPage={page < 1 || page > upcomingMovies.total_pages ? 1 : page}
        totalPages={upcomingMovies.total_pages}
        pageType="upcoming"
      />
    </main>
  );
};

export default page;
