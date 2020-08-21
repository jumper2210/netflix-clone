export const base_url = "https://image.tmdb.org/t/p/original/";

export interface Imovie {
  id: string;
  poster_path: string;
  name: string;
  backdrop_path: boolean;
  title: string;
  original_name: string;
  overview: string;
}

export interface Iopts {
  height: string;
  width: string;
  playerVars: {
    autoplay: any;
  };
}
