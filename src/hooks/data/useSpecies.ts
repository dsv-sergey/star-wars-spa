import { useQueries } from "@tanstack/react-query";
import { fetchData } from "api";

const KEY = "SPECIES";

export const useSpecies = (species: string[]) => {
    const speciesQueries = useQueries({
        queries: [
            ...species.map((species) => {
                return {
                    queryKey: [KEY, species],
                    queryFn: () => fetchData(species),
                    options: {
                        keepPreviousData: true,
                        refetchOnWindowFocus: false,
                        staleTime: Infinity,
                    }
                };
            })
        ]});

    return speciesQueries;
};