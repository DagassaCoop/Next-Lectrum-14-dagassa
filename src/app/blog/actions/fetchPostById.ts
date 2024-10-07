import { supabase } from "@/utils/supabase/client";
import { TPost } from "@/types/Post";

export async function fetchPostById(id: string): Promise<TPost[]> {
  try {
    const { data: posts, error } = await supabase.from("posts").select().eq("id", id);

    if (error) {
      throw new Error(error.message);
    }

    return posts[0];
  } catch (error: any) {
    throw new Error(error.message);
  }
}
