import supabase from "./supabase";

export async function fetchSchedules() {
  console.log("fetching schedules");
  let query = supabase.from("Schedules");

  query = query.select("*");

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Schedules could not be retrieved");
  }

  console.log("returning data", data, count);
  return { data, count };
}
