import Image from "next/image";
import { getMovies } from "@utils/getMovies";

const page = async ({ params }) => {
  const header = params.id.replace(/-/g, " ");

  const movies = await getMovies(header, "tv");

  return (
    <div className="text-center">
      <h2 className="movies_header">{header}</h2>
      {console.log(movies)}
      <div className="movies">
        {movies.map((movie, index) => {
          return (
            <div className="mt-5 movie" key={index}>
              <Image
                src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                className="movie_img"
                width="250"
                height="300"
                alt={movie.name}
              />
              <div className="movie_desc">
                <h2 className="movie_name">TITLE : {movie.name}</h2>
                <h2 className="movie_date">
                  REALSE DATE : {movie.first_air_date}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
