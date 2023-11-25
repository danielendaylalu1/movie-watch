import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_MOVIE_API_KEY;

const baseUrl = "https://api.themoviedb.org/3";

export const getMovies = async (url, type) => {
  if (url === "Top Rated") {
    const response = await fetch(
      `${baseUrl}/${type}/top_rated?api_key=${apiKey}&language=en-US&page-6`
    );
    if (!response.ok) {
      throw new Error("error ocurred");
    }
    const data = await response.json();
    return data.results;
  }
  if (url === "Trending") {
    const response = await fetch(
      `${baseUrl}/trending/${type}/week?api_key=${apiKey}&language=en-US&page-6`
    );
    if (!response.ok) {
      throw new Error("error ocurred");
    }
    const data = await response.json();
    return data.results;
  }
  if (url === "Popular") {
    const response = await fetch(
      `${baseUrl}/${type}/popular?api_key=${apiKey}&language=en-US&page-6`
    );
    if (!response.ok) {
      throw new Error("error ocurred");
    }
    const data = await response.json();
    return data.results;
  }
};
