"use client";
import React, { useEffect, useRef } from "react";

export default function FooterRevealWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        document.documentElement.style.setProperty(
          "--footer-height",
          `${footerRef.current.offsetHeight}px`
        );
      }
    };

    updateHeight();

    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        document.documentElement.style.setProperty(
          "--footer-height",
          `${entries[0].contentRect.height}px`
        );
      }
    });

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full z-0 pointer-events-auto bg-bg-tertiary">
      <div ref={footerRef}>
        {children}
      </div>
    </div>
  );
}
