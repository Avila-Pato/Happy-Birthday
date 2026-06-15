"use client";

import Image from "next/image";

interface Props {
  onClick: () => void;
  disabled: boolean;
}

export default function CakeButton({ onClick, disabled }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="cake-btn cursor-pointer select-none relative"
        onClick={onClick}
        disabled={disabled}
        aria-label="Click the cake"
      >
        {/* llama sobre el palito del pastel */}
        <svg
          width="28" height="30" viewBox="0 0 28 40" fill="none"
          overflow="visible"
          className="absolute"
          style={{ top: -30, left: "46%", marginLeft: 0 }}
        >
          <g
            className="flame"
            style={{
              transformOrigin: "14px 25px",
              animation: "flicker 1s ease-in-out infinite alternate",
            }}
          >
            <ellipse cx="14" cy="13" rx="7" ry="12" fill="#ff9f43" />
            <ellipse cx="14" cy="11" rx="4.5" ry="8" fill="#ffd93d" />
            <ellipse cx="14" cy="9" rx="2" ry="4" fill="white" opacity="0.85" />
          </g>
          <line x1="14" y1="25" x2="14" y2="40" stroke="#888" strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        <Image
          src="/assets/cake.png"
          alt="pastel"
          width={280}
          height={280}
          className="object-contain"
        />
      </button>

      <p
        className="celebration text-white text-3xl text-center opacity-0 mt-6"
        style={{ fontFamily: "var(--font-caveat), cursive" }}
      >
        ¡¡ Feliz cumpleaños!! 🎉🎊
      </p>
    </div>
  );
}
