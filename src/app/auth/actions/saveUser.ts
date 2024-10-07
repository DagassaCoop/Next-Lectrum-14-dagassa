"use client";

import { supabase } from "@/utils/supabase/client";

export async function saveUser(user: { id: string; email: string }) {
  const { error } = await supabase.from("profiles").upsert({
    id: user.id,
    email: user.email,
  });

  if (error) throw new Error("Failed save user: " + error.message);
}
