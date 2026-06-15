"use client";

import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Instructions({ message }: { message: string }) {
  useEffect(() => {
    gsap.from(".instructions > p", {
      opacity: 0,
      y: 18,
      duration: 0.5,
      stagger: 0.25,
      delay: 1.0,
    });
    gsap.set(".enter-btn", { opacity: 0, y: 12 });
  }, []);

  return (
    <div
      className="instructions text-center space-y-4"
      style={{ fontFamily: "var(--font-caveat), cursive" }}
    >
      <p className="text-white text-3xl flex items-center justify-center gap-2">
        &quot; Haz click en el pastel
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="13" fill="#ffd93d" stroke="#ffb700" strokeWidth="1.5" />
          <circle cx="10" cy="11" r="2" fill="#333" />
          <circle cx="18" cy="11" r="2" fill="#333" />
          <path d="M 9,17 Q 14,22 19,17" stroke="#333" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </svg>
        &quot;
      </p>

      <p className="text-white text-3xl flex items-center justify-center gap-3">
        Luego, sopla la vela
        <svg width="32" height="72" viewBox="0 0 32 72" fill="none" overflow="visible">
          <g
            className="flame"
            style={{
              transformOrigin: "16px 26px",
              animation: "flicker 1s ease-in-out infinite alternate",
            }}
          >
            <ellipse cx="16" cy="13" rx="7" ry="12" fill="#ff9f43" />
            <ellipse cx="16" cy="11" rx="4.5" ry="8" fill="#ffd93d" />
            <ellipse cx="16" cy="9" rx="2" ry="4" fill="white" opacity="0.85" />
          </g>
          <line x1="16" y1="25" x2="16" y2="30" stroke="#888" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="8" y="30" width="16" height="24" rx="4" fill="#f0e6ff" />
          <rect x="8" y="30" width="16" height="8" rx="4" fill="#d4c5f9" />
          <ellipse cx="16" cy="54" rx="8" ry="3" fill="#e0d0ff" opacity="0.5" />
        </svg>
      </p>

      <p className="text-white/55 text-xl mt-3">( {message} )</p>

      <Link
        href="/enter"
        className="enter-btn inline-block bg-[#f0e6ff] text-[#333] font-bold py-2 px-6 rounded-full hover:bg-white transition duration-300"
        style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "1.2rem" }}
      >
        Click Para entrar
      </Link>
    </div>
  );
}
