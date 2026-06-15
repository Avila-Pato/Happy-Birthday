"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Countdown({ count }: { count: number | null }) {
  const numRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (count === null || !numRef.current) return;
    gsap.fromTo(
      numRef.current,
      { scale: 2.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(1.7)" }
    );
    gsap.to(numRef.current, {
      opacity: 0,
      scale: 0.4,
      duration: 0.25,
      delay: 0.7,
      ease: "power2.in",
    });
  }, [count]);

  if (count === null) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-30 pointer-events-none">
      <div
        ref={numRef}
        style={{
          fontFamily: "var(--font-caveat), cursive",
          fontSize: 200,
          fontWeight: 700,
          color: "white",
          textShadow: "0 0 40px #ffd93d, 0 0 80px #ff9f43aa",
          lineHeight: 1,
        }}
      >
        {count}
      </div>
    </div>
  );
}
