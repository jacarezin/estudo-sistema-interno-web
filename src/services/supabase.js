import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://idqvptijbzqlhusnprnj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkcXZwdGlqYnpxbGh1c25wcm5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5MjI3MzksImV4cCI6MjAyMDQ5ODczOX0.KuAx69GzEp44fjmrNdcXTPqwffB_4IWa4kM1SksiMxU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
