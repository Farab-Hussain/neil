"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "../ui/SectionHeading";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
export const ThirdSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const fill = document.querySelector(".fill");
      const listItems = gsap.utils.toArray<HTMLLIElement>("li");
      const slides = gsap.utils.toArray<HTMLElement>(".slide");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pin-section",
          start: "top top",
          end: `+=${listItems.length * 50}%`,
          pin: true,
          scrub: true,
        },
      });
      if (fill) {
        gsap.set(fill, {
          scaleY: 1 / listItems.length,
          transformOrigin: "top left",
        });
      }
      listItems.forEach((item, i) => {
        const prev = listItems[i - 1];
        if (prev) {
          tl.set(item, { color: "#000" }, 0.5 * i)
            .to(slides[i], { autoAlpha: 1, duration: 0.2 }, "<")
            .set(prev, { color: "#000" }, "<")
            .to(slides[i - 1], { autoAlpha: 0, duration: 0.2 }, "<");
        } else {
          gsap.set(item, { color: "#000" });
          gsap.set(slides[i], { autoAlpha: 1 });
        }
      });
      tl.to({}, {}).to(
        fill,
        {
          scaleY: 1,
          transformOrigin: "top left",
          ease: "none",
          duration: tl.duration() - 0.5,
        },
        0
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={sectionRef}>
      <section className="w-full h-screen border-y-2 border-dashed border-gray-400 pin-section">
        <div className="w-full max-w-6xl h-[20%] mx-auto flex justify-center items-center">
          <SectionHeading text="Privacy at every step of your journey" />
        </div>
        <div className=" w-full h-[60%]  flex justify-center items-center">
          <div className="w-full max-w-6xl mx-auto flex px-4 relative content">
            <ul className="text-[30px] text-white pr-4 list capitalize">
              <li>Request</li>
              <li>Processing</li>
              <li>Completion</li>
              <li>Storage</li>
            </ul>
            <div className="absolute top-0 left-0 w-[2px] h-full bg-black fill"></div>
            <div className="flex-grow relative right">
              <div className="slide absolute top-0 right-0 w-[80%] h-[400px] opacity-0 invisible rounded-[10px] flex flex-col items-start justify-start text-black text-3xl p-6 gap-4">
                <h2 className="text-4xl mb-2">Demo Heading for Request</h2>
                <p className="text-lg items-center">
                  When you make a request, your data is handled with utmost care
                  <Image
                    src="/assets/images/request.jpeg"
                    alt="Request"
                    width={40}
                    height={24}
                    className="h-6 w-10 object-cover rounded mx-2 inline-block align-baseline"
                    unoptimized
                  />
                  from the very beginning. Our system ensures that every message
                  is encrypted before it leaves your device, providing a secure
                  channel for your information. As your request travels through
                  our network,
                  <Image
                    src="/assets/images/processing.png"
                    alt="Processing"
                    width={40}
                    height={24}
                    className="h-6 w-10 object-cover rounded mx-2 inline-block align-baseline"
                    unoptimized
                  />
                  it is protected by multiple layers of security. You can trust
                  that your privacy is our top priority, and we never compromise
                  on safety.
                  <Image
                    src="/assets/images/completion.jpg"
                    alt="Completion"
                    width={40}
                    height={24}
                    className="h-6 w-10 object-cover rounded mx-2 inline-block align-baseline"
                    unoptimized
                  />
                </p>
              </div>

              <div className="slide absolute top-0 right-0 w-[80%] h-[400px] opacity-0 invisible rounded-[10px] flex flex-col items-start justify-start text-black text-3xl p-6 gap-4">
                <h2 className="text-4xl mb-2">Demo Heading for Processing</h2>
                <p className="text-lg items-center">
                  During processing, your information is never stored longer
                  than necessary
                  <Image
                    src="/assets/images/processing.png"
                    alt="Processing"
                    width={40}
                    height={24}
                    className="h-6 w-10 object-cover rounded mx-2 inline-block align-baseline"
                    unoptimized
                  />
                  and is always handled by secure servers. We use advanced
                  algorithms to ensure that your data is processed efficiently
                  and safely. At every step,
                  <Image
                    src="/assets/images/request.jpeg"
                    alt="Request"
                    width={40}
                    height={24}
                    className="h-6 w-10 object-cover rounded mx-2 inline-block align-baseline"
                    unoptimized
                  />
                  we monitor for any potential threats, keeping your details
                  confidential. Our commitment to privacy means your data is
                  never used for anything other than fulfilling your request.
                  <Image
                    src="/assets/images/completion.jpg"
                    alt="Completion"
                    width={40}
                    height={24}
                    className="h-6 w-10 object-cover rounded mx-2 inline-block align-baseline"
                    unoptimized
                  />
                </p>
              </div>
              <div className="slide absolute top-0 right-0 w-[80%] h-[400px] opacity-0 invisible rounded-[10px] flex flex-col items-start justify-start text-black text-3xl p-6 gap-4">
                <h2 className="text-4xl mb-2">Demo Heading for Completion</h2>
                <p className="text-lg items-center">
                  Once your task is completed, all sensitive details are
                  immediately purged from our system
                  <Image
                    src="/assets/images/completion.jpg"
                    alt="Completion"
                    width={40}
                    height={24}
                    className="h-6 w-10 object-cover rounded mx-2 inline-block align-baseline"
                    unoptimized
                  />
                  to ensure your privacy. We believe in transparency, so you can
                  always review how your data was handled. Our team regularly
                  audits our processes
                  <Image
                    src="/assets/images/processing.png"
                    alt="Processing"
                    width={40}
                    height={24}
                    className="h-6 w-10 object-cover rounded mx-2 inline-block align-baseline"
                    unoptimized
                  />
                  to maintain the highest standards of security. Your trust is
                  important to us, and we work hard to keep it.
                  <Image
                    src="/assets/images/request.jpeg"
                    alt="Request"
                    width={40}
                    height={24}
                    className="h-6 w-10 object-cover rounded mx-2 inline-block align-baseline"
                    unoptimized
                  />
                </p>
              </div>
              <div className="slide absolute top-0 right-0 w-[80%] h-[400px] opacity-0 invisible rounded-[10px] flex flex-col items-start justify-start text-black text-3xl p-6 gap-4">
                <h2 className="text-4xl mb-2">Demo Heading for Storage</h2>
                <p className="text-lg items-center">
                  Only your preferences are saved, and only with your explicit
                  permission
                  <Image
                    src="/assets/images/storage.jpg"
                    alt="Storage"
                    width={40}
                    height={24}
                    className="h-6 w-10 object-cover rounded mx-2 inline-block align-baseline"
                    unoptimized
                  />
                  so you can enjoy a personalized experience without sacrificing
                  privacy. We never store unnecessary information, and you can
                  delete your preferences at any time. Our storage systems are
                  designed to be secure and resilient
                  <Image
                    src="/assets/images/completion.jpg"
                    alt="Completion"
                    width={40}
                    height={24}
                    className="h-6 w-10 object-cover rounded mx-2 inline-block align-baseline"
                    unoptimized
                  />
                  so your data is always protected. Thank you for trusting us
                  with your information.
                  <Image
                    src="/assets/images/processing.png"
                    alt="Processing"
                    width={40}
                    height={24}
                    className="h-6 w-10 object-cover rounded mx-2 inline-block align-baseline"
                    unoptimized
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
