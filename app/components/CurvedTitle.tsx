"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function CurvedTitle({ name }: { name: string }) {
  useEffect(() => {
    gsap.from(".curve-svg", { opacity: 0, duration: 1, delay: 0.2 });
  }, []);

  return (
    <svg
      className="curve-svg"
      viewBox="0 0 900 240"
      width="100%"
      style={{ maxWidth: 900, marginBottom: -20 }}
    >
      <defs>
        <path id="curve" d="M 20,200 Q 450,20 880,200" />
      </defs>
      <text
        fill="#ffd93d"
        fontSize="74"
        fontFamily="var(--font-caveat), cursive"
        fontWeight="700"
        letterSpacing="2"
        style={{ filter: "drop-shadow(0 0 8px #ffb70088)" }}
      >
        <textPath href="#curve" startOffset="50%" textAnchor="middle">
          ✨ Feliz cumpleaños, {name} ✨
        </textPath>
      </text>
    </svg>
  );
}
