import Link from "next/link";

const TvShows = () => {
  const Links = ["Trending", "Top-Rated", "Popular"];
  return (
    <div className="text-center">
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3637490368597108"
        crossorigin="anonymous"
      ></script>
      <h1 className="text-[1.5rem] layout_header">Tv shows</h1>
      <div className="flex flex-wrap justify-evenly gap-y-20 mt-10 p-5 home_links">
        {Links.map((link, index) => {
          return (
            <Link href={`/tvshows/${link}`} className="home_link" key={index}>
              {link}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TvShows;
