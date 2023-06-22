import Link from "next/link";

const TvShows = () => {
  const Links = ["Tranding", "Top-Rated", "Popular"];
  return (
    <div className="text-center">
      <h1 className="text-[1.5rem] layout_header">Movies</h1>
      <div className="flex flex-wrap justify-evenly gap-y-20 mt-20 p-5 home_links">
        {Links.map((link, index) => {
          return (
            <Link href={`/tvshows/${link}`} className="home_link">
              {link}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TvShows;
