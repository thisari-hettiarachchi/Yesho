"use client";

export function useToast() {
  function toast({ title, description }) {
    if (typeof window !== "undefined") {
      try {
        // Prefer console for now to avoid blocking UX; replace with real toast later
        console.info("Toast:", title || "", description || "");
      } catch (_) {
        // no-op
      }
    }
  }
  return { toast };
}

export default useToast;
