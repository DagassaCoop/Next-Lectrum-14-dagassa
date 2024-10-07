import { supabase } from "@/utils/supabase/client";
import { TPost } from "@/types/Post";

export async function fetchPosts(): Promise<TPost[]> {
  try {
    const { data: posts, error } = await supabase.from("posts").select();

    if (error) {
      throw new Error(error.message);
    }

    return posts;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
