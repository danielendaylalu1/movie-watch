import { getSingleMovie } from "@utils/getMovies";

// import { getSingleMovie } from "../../../../utils/getMovies";

const page = async ({ params }) => {
  const id = params.slug;
  const movie = await getSingleMovie(id);

  // console.log(movie);
  return <iframe>{movie}</iframe>;
};

export default page;
