import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// TODO: this isn't reading in the env variables correctly. Think it's because this isn't in the pages folder
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
