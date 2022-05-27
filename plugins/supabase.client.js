import { createClient } from "@supabase/supabase-js";
export default ({ app }, inject) => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  inject("supabase", supabase);
};
