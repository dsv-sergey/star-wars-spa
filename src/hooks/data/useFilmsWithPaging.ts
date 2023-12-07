import { useQuery } from "@tanstack/react-query";
import { IPersonsRequest } from "types";
import { fetchFilms } from "api";

const KEY = "FILMS_PAGE";

export const useFilmsWithPaging = (page: number) => {


    const query = useQuery<Partial<IPersonsRequest>>({
        queryKey: [KEY, page],
        queryFn: () => fetchFilms(page),
        refetchOnWindowFocus: false,
        staleTime: Infinity,
    });

    const totalPages =  query.data ? Math.ceil((query.data as unknown as IPersonsRequest).count / 10) : 0;

    return {
        ...query,
        totalPages,
    };
};