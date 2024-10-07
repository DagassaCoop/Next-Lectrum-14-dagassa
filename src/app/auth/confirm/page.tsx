"use client";

import { supabase } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Confirm() {
  const router = useRouter();

  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    const confirmEmail = async () => {
      const token = new URLSearchParams(window.location.search).get("token");
      const email = new URLSearchParams(window.location.search).get("email");

      if (!token || !email) {
        setMessage("Invalid or missing token/email");
        setTimeout(() => {
          router.push("/auth/login");
        }, 2000);
        return;
      }

      const { error } = await supabase.auth.verifyOtp({
        email,
        token,
        type: "email",
      });

      if (error) {
        console.log("Verification error: ", error);
        setMessage("Failed to verify email: " + error.message);
      } else {
        setMessage("Email successfully verified");
        setTimeout(() => {
          router.push("/auth/login");
        }, 2000);
      }
    };

    confirmEmail();
  }, [router]);

  return (
    <div className="container mx-auto p-4">
      <p className="text-2xl">{message}</p>
    </div>
  );
}
