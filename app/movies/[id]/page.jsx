import Image from "next/image";
import { getMovies } from "@utils/getMovies";
import Link from "next/link";

const page = async ({ params }) => {
  const header = params.id.replace(/-/g, " ");

  const movies = await getMovies(header, "movie");

  return (
    <div className="text-center">
      {console.log(movies)}
      <h2 className="movies_header">{header}</h2>
      <div className="movies">
        {movies?.map((movie, index) => {
          return (
            <Link
              className="mt-5 movie"
              key={index}
              href={`https://vidsrc.to/embed/movie/${movie.id}`}
              target="_blank"
            >
              <Image
                src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                className="movie_img"
                width="250"
                height="300"
                alt={movie.title}
              />
              <div className="movie_desc">
                <h2 className="movie_name">
                  <span>TITLE :</span> {movie.title}
                </h2>
                <h3 className="movie_overview">
                  <span>Overview :</span> {movie.overview.slice(0, 200)}
                </h3>

                <h3 className="movie_date">
                  <span>Realse Date :</span> {movie.release_date}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
