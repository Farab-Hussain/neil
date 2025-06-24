"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TrueFocus from "@/app/src/components/TrueFocus";
import { Plane, ShoppingCart, Car, Calendar, Tv } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    heading: "Seqoria Can...........",
    content: "Discover what Seqoria can do for you.",
    gradient: "#fff",
    icon: "🚀",
    accent: "#E3F2FD",
  },
  {
    heading: "Book your flights",
    content:
      "Book air tickets in seconds using our intuitive platform and real-time fares.",
    gradient: "#fff",
    icon: <Plane className="w-[40px] h-[40px] text-black" />,
    accent: "#FFEBEE",
  },
  {
    heading: "Order your groceries",
    content:
      "Get fresh groceries delivered to your doorstep in under 30 minutes.",
    gradient: "#fff",
    icon: <ShoppingCart className="w-[40px] h-[40px] text-black" />,
    accent: "#E8F5E9",
  },
  {
    heading: "Schedule your Ride",
    content: "Easily book a ride with flexible timings and affordable fares.",
    gradient: "#fff",
    icon: <Car className="w-[40px] h-[40px] text-black" />,
    accent: "#F3E5F5",
  },
  {
    heading: "Find local events",
    content: "Never miss out! Browse and join local events near you anytime.",
    gradient: "#fff",
    icon: <Calendar className="w-[40px] h-[40px] text-black" />,
    accent: "#FFF3E0",
  },
  {
    heading: "Stream your shows",
    content: "Enjoy your favorite TV shows, movies, and content on the go.",
    gradient: "#fff",
    icon: <Tv className="w-[40px] h-[40px] text-black" />,
    accent: "#E3F2FD",
  },
];

const SeqoriaCanSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const scrollTween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    function setupAnimation() {
      if (!sectionRef.current || !cardsRef.current) return;

      const cardWidth = 613; // ✅ Updated card width
      const gap = 30;
      const firstCardWidth = window.innerWidth;
      const scrollableCards = cards.length - 1;

      const scrollCardsWidth = scrollableCards * (cardWidth + gap) - gap;
      const totalCardsWidth = firstCardWidth + scrollCardsWidth;
      const scrollDistance = totalCardsWidth - window.innerWidth;

      gsap.set(cardsRef.current, {
        width: `${totalCardsWidth}px`,
        display: "flex",
        gap: `${gap}px`,
      });

      if (scrollTween.current) scrollTween.current.kill();

      scrollTween.current = gsap.to(cardsRef.current, {
        x: `-${scrollDistance}px`,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }

    setupAnimation();
    window.addEventListener("resize", setupAnimation);
    return () => {
      window.removeEventListener("resize", setupAnimation);
      if (scrollTween.current) scrollTween.current.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, #f7f8fa 0%, #e3f2fd 100%)",
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        ref={cardsRef}
        style={{
          display: "flex",
          height: "100vh",
        }}
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            style={{
              width: idx === 0 ? "100vw" : "613px", // ✅ Updated card width
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "sans-serif",
              fontWeight: 300,
              position: "relative",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            {idx === 0 ? (
              <div
                style={{
                  width: "100vw",
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                  position: "relative",
                  fontFamily: "Quicksand, Arial, Helvetica, sans-serif",
                  fontWeight: 300,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    pointerEvents: "none",
                  }}
                />
                <TrueFocus
                  sentence="Seqoria Can..."
                  blurAmount={8}
                  borderColor="#fff"
                  glowColor="rgba(255,255,255,0.5)"
                  animationDuration={0.6}
                  pauseBetweenAnimations={1.2}
                />
              </div>
            ) : (
              <div
                style={{
                  width: "613px", // ✅ Updated card width
                  height: "860px",
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "24px",
                  boxShadow:
                    "0 20px 60px rgba(0, 0, 0, 0.1), 0 8px 32px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "3rem",
                  position: "relative",
                  overflow: "hidden",
                  fontFamily: "Quicksand, Arial, Helvetica, sans-serif",
                  fontWeight: 300,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: card.gradient,
                    opacity: 0.05,
                    borderRadius: "24px",
                  }}
                />
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1.5rem",
                    animation: "float 3s ease-in-out infinite",
                  }}
                >
                  {card.icon}
                </div>
                <h2
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 600,
                    marginBottom: "1rem",
                    textAlign: "center",
                    background: "#fff",

                    lineHeight: 1.2,
                    color: "#0F52BA !important", // Ensure text color is visible
                  }}
                >
                  {card.heading}
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    textAlign: "center",
                    maxWidth: "300px",
                    lineHeight: 1.6,
                    color: "#4A5568",
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {card.content}
                </p>
                <div
                  style={{
                    width: "50px",
                    height: "4px",
                    background: " linear-gradient(90deg, #0F52BA, #009B77);",
                    borderRadius: "2px",
                    marginTop: "1.5rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default SeqoriaCanSection;
