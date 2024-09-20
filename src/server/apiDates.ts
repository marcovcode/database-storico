import supabase from "../lib/supabase";

export const getDates = async () => {
    const { data: dates, error } = await supabase.from("dates").select("*");
    if (error) throw new Error(error.message);
    return dates;
};
