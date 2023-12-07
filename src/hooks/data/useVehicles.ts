import { useQueries } from "@tanstack/react-query";
import { fetchData } from "api";

const KEY = "VEHICLES";

export const useVehicles = (vehicles: string[]) => {
    const vehicleQueries = useQueries({
        queries: [
            ...vehicles.map((vehicle) => {
                return {
                    queryKey: [KEY, vehicle],
                    queryFn: () => fetchData(vehicle),
                    keepPreviousData: true,
                    refetchOnWindowFocus: false,
                    staleTime: Infinity,
                };
            })
        ]});

    return vehicleQueries;
};