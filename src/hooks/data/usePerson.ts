import { useQuery } from "@tanstack/react-query";
import { fetchData } from "api";
import { ORIGIN } from "constants/routes";

const KEY = "PERSONS";

export const usePerson = (personId: string) => {
    const query = useQuery({
        queryKey: [KEY, `${ORIGIN}/people/${personId}/`],
        queryFn: () => fetchData(`${ORIGIN}/people/${personId}/`),
        refetchOnWindowFocus: false,
        staleTime: Infinity,
    });

    return query;
};