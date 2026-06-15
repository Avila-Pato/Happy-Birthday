"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import CurvedTitle from "./components/CurvedTitle";
import Instructions from "./components/Instructions";
import CakeButton from "./components/CakeButton";
import Countdown from "./components/Countdown";

gsap.registerPlugin(SplitText);

const COLORS = ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff", "#ff6bb5", "#ff9f43", "#a29bfe", "#00cec9"];

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const confettiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(".cake-btn", {
      opacity: 0,
      scale: 0.4,
      duration: 0.9,
      delay: 0.6,
      ease: "back.out(1.7)",
    });
  }, []);

  const extinguishFlame = () => {
    document.querySelectorAll(".flame").forEach((el) => {
      (el as HTMLElement).style.animation = "none";
    });
    gsap.set(".flame", { transformOrigin: "50% 100%" });
    gsap.timeline()
      .to(".flame", { rotation: -5,  scaleX: 0.88, scaleY: 1.1,  duration: 0.13, ease: "sine.inOut" })
      .to(".flame", { rotation: 4,   scaleX: 1.08, scaleY: 0.94, duration: 0.13, ease: "sine.inOut" })
      .to(".flame", { rotation: -6,  scaleX: 0.85, scaleY: 1.12, duration: 0.11, ease: "sine.inOut" })
      .to(".flame", { rotation: 3,   scaleX: 1.04, scaleY: 0.96, duration: 0.11, ease: "sine.inOut" })
      .to(".flame", { rotation: 18,  scaleX: 0.5,  scaleY: 1.5,  opacity: 0.75,  duration: 0.3,  ease: "power1.inOut" })
      .to(".flame", { scaleY: 0,     scaleX: 0.15, opacity: 0,   rotation: 8,    duration: 0.45, ease: "power2.out" });

    gsap.to(".celebration", { opacity: 1, y: -10, duration: 0.7, delay: 0.8, ease: "power2.out" });
    gsap.to(".enter-btn", { opacity: 1, y: 0, duration: 0.6, delay: 1.4, ease: "back.out(1.7)" });
  };

  const launchConfetti = () => {
    const container = confettiRef.current;
    if (!container) return;
    for (let i = 0; i < 80; i++) {
      const size = Math.random() * 10 + 5;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const dot = document.createElement("div");
      dot.style.cssText = `
        position:absolute;
        left:${Math.random() * window.innerWidth}px;
        top:-${size}px;
        width:${size}px;height:${size}px;
        background-color:${color};
        border-radius:${Math.random() > 0.5 ? "50%" : "2px"};
        pointer-events:none;
      `;
      container.appendChild(dot);
      gsap.to(dot, {
        y: window.innerHeight + 20,
        x: `+=${(Math.random() - 0.5) * 200}`,
        rotation: Math.random() * 720,
        opacity: 0,
        duration: 1.5 + Math.random() * 1.5,
        delay: Math.random() * 0.8,
        ease: "power1.in",
        onComplete: () => dot.remove(),
      });
    }
  };

  const handleCakeClick = () => {
    if (clicked) return;
    setClicked(true);

    // Countdown via setTimeout chain — no setState in useEffect
    let count = 3;
    setCountdown(count);

    const tick = () => {
      count -= 1;
      setCountdown(count);
      if (count === 0) {
        setTimeout(() => {
          setCountdown(null);
          extinguishFlame();
          launchConfetti();
        }, 600);
      } else {
        setTimeout(tick, 1000);
      }
    };

    setTimeout(tick, 1000);
  };

  return (
    <main className="relative flex h-screen bg-black items-center justify-center overflow-hidden">
      <div ref={confettiRef} className="absolute inset-0 pointer-events-none z-20" />

      <Countdown count={countdown} />

      {/* Izquierda: título + instrucciones */}
      <div className="flex flex-col items-center justify-center w-1/2 z-10 ml-20">
        <CurvedTitle name="NAME" />
        <Instructions message="XXXXXXXXX" />
      </div>

      {/* Derecha: pastel */}
      <div className="w-1/2 flex items-center justify-center z-10">
        <CakeButton onClick={handleCakeClick} disabled={clicked} />
      </div>
    </main>
  );
}
