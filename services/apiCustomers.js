import supabase from "./supabase";

export async function fetchCustomers() {
  console.log("fetching customers");
  let query = supabase.from("Customers");

  query = query.select("*, Schedules(*)");

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Customers could not be retrieved");
  }

  return { data, count };
}
