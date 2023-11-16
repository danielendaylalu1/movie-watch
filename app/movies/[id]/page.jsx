import Image from "next/image";
import { getMovies } from "@utils/getMovies";

const page = async ({ params }) => {
  const header = params.id.replace(/-/g, " ");

  const movies = await getMovies(header, "movie");

  return (
    <div className="text-center">
      <h2 className="movies_header">{header}</h2>

      <div className="movies">
        {movies?.map((movie, index) => {
          return (
            <div className="mt-5 movie" key={index}>
              <Image
                src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                className="movie_img"
                width="250"
                height="300"
                alt={movie.title}
              />
              <div className="movie_desc">
                <h2 className="movie_name">
                  Tfirst_air_dateITLE : {movie.title}
                </h2>
                <h3 className="movie_overview">
                  Overview : {movie.overview.slice(0, 200)}
                </h3>

                <h3 className="movie_date">
                  REALSE DATE : {movie.release_date}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
