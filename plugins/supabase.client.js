import { createClient } from "@supabase/supabase-js";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyemZncXBkdHptcm1mdWNncXRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA4OTk0OTMsImV4cCI6MTk2NjQ3NTQ5M30.nMGFd1pp6q6VQ8TnS_RwJHwiC-7KggRjOcxlaUXgHpQ";
export default ({ app }, inject) => {
  const supabaseUrl = "https://drzfgqpdtzmrmfucgqtf.supabase.co";
  const supabaseKey = SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  inject("supabase", supabase);
};
