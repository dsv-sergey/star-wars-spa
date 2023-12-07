import { useQueries } from "@tanstack/react-query";
import { fetchData } from "api";

const KEY = "STARSHIPS";

export const useStarships = (starships: string[]) => {
    const starshipQueries = useQueries({
        queries: [
            ...starships.map((starship) => {
                return {
                    queryKey: [KEY, starship],
                    queryFn: () => fetchData(starship),
                    options: {
                        keepPreviousData: true,
                        refetchOnWindowFocus: false,
                        staleTime: Infinity,
                    }
                };
            })
        ]});

    return starshipQueries;
};