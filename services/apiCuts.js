import supabase from "./supabase";

export async function fetchCuts(startDate, endDate) {
  console.log("fetching cuts");
  let query = supabase.from("Scheduled_Cuts");

  query = query.select("*, Customers(*)");
  if (startDate) query = query.gte("scheduled_date", startDate);

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Cuts could not be retrieved");
  }

  console.log("returning data", data, count);
  return { data, count };
}
