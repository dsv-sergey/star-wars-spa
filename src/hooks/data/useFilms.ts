import { useQueries } from "@tanstack/react-query";
import { fetchData } from "api";

const KEY = "FILMS";

export const useFilms = (films: string[]) => {
    const filmQueries = useQueries({
        queries: [
            ...films.map((film) => {
                return {
                    queryKey: [KEY, film],
                    queryFn: () => fetchData(film),
                    options: {
                        keepPreviousData: true,
                        refetchOnWindowFocus: false,
                        staleTime: Infinity,
                    }
                };
            })
        ]});

    return filmQueries;
};