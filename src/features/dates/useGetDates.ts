import { useQuery } from "@tanstack/react-query";
import { getDates } from "../../server/apiDates";

export const useGetDates = () => {
    const { data: dates, isLoading } = useQuery({
        queryKey: ["dates"],
        queryFn: getDates,
    });

    return { dates, isLoading };
};
