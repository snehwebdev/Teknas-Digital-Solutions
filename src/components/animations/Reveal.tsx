"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const current = ref.current;

    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={visible ? "fade-up" : "opacity-0"}
    >
      {children}
    </div>
  );
}