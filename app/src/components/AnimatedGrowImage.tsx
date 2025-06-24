"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper as SwiperCore } from 'swiper';
// import { EffectFlip } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
const slidesData = [
  {
    heading: "Book your flight",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bg: "#E3F2FD",
    img: "./assets/images/book-your-flights.webp",
  },
  {
    heading: "Book you a ride",
    para: "Work together in real-time, wherever you are.",
    bg: "#FFF3E0",
    img: "/assets/images/book-you-a-ride.jpeg",
  },
  {
    heading: "Book you a reservation",
    para: "Your data is protected with industry-leading security.",
    bg: "#E8F5E9",
    img: "/assets/images/book-you-a-reservation.jpg",
  },
  {
    heading: "Order your groceries",
    para: "24/7 support to help you succeed at every step.",
    bg: "#F3E5F5",
    img: "/assets/images/order-groceries.jpeg",
  },
];
const AnimatedGrowImage = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const secondCardRef = useRef<HTMLDivElement>(null);
  const thirdCardRef = useRef<HTMLDivElement>(null);
  const fourthCardRef = useRef<HTMLDivElement>(null);
  // Only use the first image
  const firstImage = slidesData[0].img;
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const triggerElem = document.getElementById("hero-sticky-trigger");
    if (!imageRef.current || !triggerElem) return;
    // 1. First image grow animation (independent)
    gsap.fromTo(
      imageRef.current,
      {
        width: 145,
        height: 145,
        minWidth: 145,
        minHeight: 145,
        borderRadius: "50%",
        x: 0,
        opacity: 1,
      },
      {
        width: "100vw",
        height: "100vh",
        minWidth: "100vw",
        minHeight: "100vh",
        borderRadius: "0px",
        x: "-3vw",
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerElem,
          start: "top top",
          end: "+=100vh",
          scrub: true,
          onUpdate: (self) => {
            if (self.progress >= 0.99) {
              setShowContent(true);
            } else {
              setShowContent(false);
            }
          },
        },
      }
    );
    // 2. Second image grow animation (independent)
    if (secondCardRef.current) {
      gsap.fromTo(
        secondCardRef.current,
        {
          width: 145,
          height: 145,
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
          background: `url(${firstImage}) center center / cover no-repeat`,
          color: "#0F52BA",
          fontSize: "1.5rem",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
          boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
          overflow: "hidden",
          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
          opacity: 0,
        },
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 1,
          // ease: 'power2.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: triggerElem,
            start: "top+=140vh top",
            end: "top+=600vh top",
            scrub: true,
          },
        }
      );
    }
    // 3. Third image grow animation (independent)
    if (thirdCardRef.current) {
      gsap.fromTo(
        thirdCardRef.current,
        {
          width: 145,
          height: 145,
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
          background: `url(${firstImage}) center center / cover no-repeat`,
          color: "#0F52BA",
          fontSize: "1.5rem",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 4,
          boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
          overflow: "hidden",
          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
          opacity: 0,
        },
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: triggerElem,
            start: "top+=600vh top",
            end: "top+=900vh top",
            scrub: true,
          },
        }
      );
    }
    // 4. Fourth image grow animation (independent)
    if (fourthCardRef.current) {
      gsap.fromTo(
        fourthCardRef.current,
        {
          width: 145,
          height: 145,
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
          background: `url(${firstImage}) center center / cover no-repeat`,
          color: "#0F52BA",
          fontSize: "1.5rem",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 5,
          boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
          overflow: "hidden",
          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
          opacity: 0,
        },
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: triggerElem,
            start: "top+=900vh top",
            end: "top+=1200vh top",
            scrub: true,
          },
        }
      );
    }
  }, []);
  return (
    <div
      ref={imageRef}
      style={{
        width: 145,
        height: 145,
        minWidth: 145,
        minHeight: 145,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${firstImage}) center center / cover no-repeat`,
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        position: "relative",
      }}
    >
      {/* First card (right, on bottom) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "35%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "rgba(255,255,255,0.85)",
          color: "#0F52BA",
          fontSize: "1.3rem",
          fontWeight: 400,
          borderRadius: "16px 0 0 16px",
          padding: "2.5rem 2.5rem",
          boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
          opacity: showContent ? 1 : 0,
          transition: "opacity 0.7s",
          zIndex: 2,
          pointerEvents: showContent ? "auto" : "none",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "1.2rem",
            fontWeight: 600,
          }}
        >
          Demo Content
        </h2>
        <p style={{ lineHeight: 1.7 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi,
          euismod euismod nisi nisi euismod. Mauris non tempor quam, et lacinia
          sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit
          elit, elementum sed varius at, adipiscing vitae est.
        </p>
      </div>
      {/* Second card (center, grows to full screen, on top) */}
      <div
        ref={secondCardRef}
        style={{
          width: 145,
          height: 145,
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
          background: `url(${firstImage}) center center / cover no-repeat`,
          color: "#0F52BA",
          fontSize: "1.5rem",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
          boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
          overflow: "hidden",
          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
          opacity: 0,
        }}
      >
        {/* Second card content box on right */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "35%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "rgba(255,255,255,0.85)",
            color: "#0F52BA",
            fontSize: "1.3rem",
            fontWeight: 400,
            borderRadius: "16px 0 0 16px",
            padding: "2.5rem 2.5rem",
            boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
            zIndex: 4,
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "1.2rem",
              fontWeight: 600,
            }}
          >
            Second Card Content
          </h2>
          <p style={{ lineHeight: 1.7 }}>
            This is the second card. It animates from the center and grows to
            fill the screen as you scroll further. You can put any content here!
          </p>
        </div>
      </div>
      {/* Third card (center, grows to full screen, on top) */}
      <div
        ref={thirdCardRef}
        style={{
          width: 145,
          height: 145,
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
          background: `url(${firstImage}) center center / cover no-repeat`,
          color: "#0F52BA",
          fontSize: "1.5rem",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 4,
          boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
          overflow: "hidden",
          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
          opacity: 0,
        }}
      >
        {/* Third card content box on right */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "35%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "rgba(255,255,255,0.85)",
            color: "#0F52BA",
            fontSize: "1.3rem",
            fontWeight: 400,
            borderRadius: "16px 0 0 16px",
            padding: "2.5rem 2.5rem",
            boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
            zIndex: 5,
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "1.2rem",
              fontWeight: 600,
            }}
          >
            Third Card Content
          </h2>
          <p style={{ lineHeight: 1.7 }}>
            This is the third card. It animates from the center and grows to
            fill the screen as you scroll further. You can put any content here!
          </p>
        </div>
      </div>
      {/* Fourth card (center, grows to full screen, on top) */}
      <div
        ref={fourthCardRef}
        style={{
          width: 145,
          height: 145,
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
          background: `url(${firstImage}) center center / cover no-repeat`,
          color: "#0F52BA",
          fontSize: "1.5rem",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 5,
          boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
          overflow: "hidden",
          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
          opacity: 0,
        }}
      >
        {/* Fourth card content box on right */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "35%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "rgba(255,255,255,0.85)",
            color: "#0F52BA",
            fontSize: "1.3rem",
            fontWeight: 400,
            borderRadius: "16px 0 0 16px",
            padding: "2.5rem 2.5rem",
            boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
            zIndex: 6,
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "1.2rem",
              fontWeight: 600,
            }}
          >
            Fourth Card Content
          </h2>
          <p style={{ lineHeight: 1.7 }}>
            This is the fourth card. It animates from the center and grows to
            fill the screen as you scroll further. You can put any content here!
          </p>
        </div>
      </div>
    </div>
  );
};
export default AnimatedGrowImage;
