import { createClient } from "@supabase/supabase-js";
export default ({ $config: { supabaseUrl, supabaseKey } }, inject) => {
  const supabase = createClient(supabaseUrl, supabaseKey);
  inject("supabase", supabase);
};
