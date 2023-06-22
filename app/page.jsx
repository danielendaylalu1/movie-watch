import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-evenly gap-y-20 mt-10 p-5 home_links">
      <Link href={`/movies`} className="home_link">
        Movies
      </Link>
      <Link href={`/tvshows`} className="home_link">
        Tv shows
      </Link>
    </div>
  );
}
