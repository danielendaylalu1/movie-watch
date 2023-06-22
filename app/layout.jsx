import Link from "next/link";
import "../styles/globals.css";

export const metadata = {
  title: "Movie-watch",
  description: "watch movies and tv shows.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="p-5 main">
          <h2 className="text-center main_header">Welcome to movie-watch</h2>
          <div className="navigate">
            <Link className="navigate_link" href="/">
              Home
            </Link>
            <span>/</span>
            <Link className="navigate_link" href="/movies">
              Movies
            </Link>
            <span>/</span>
            <Link className="navigate_link" href="/tvshows">
              Tvshows
            </Link>
          </div>
          <div className="mt-10 text-center layout">
            <h1 className="text-[2rem] layout_header">
              MOVIE-<span>WATCH</span>
            </h1>
          </div>
          <div className="mt-10 text-center home">{children}</div>
          <div className="footer text-center">
            <p className="footer_text">@copyright all right reserved 2023</p>
          </div>
        </main>
      </body>
    </html>
  );
}
