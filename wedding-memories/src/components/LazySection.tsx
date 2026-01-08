import React, { useEffect, useRef, useState } from 'react';

type LazySectionProps = {
  children: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  minHeight?: number | string;
};

const LazySection: React.FC<LazySectionProps> = ({
  children,
  rootMargin = '0px',
  threshold = 0.20, // Trigger when 20% of section is visible
  minHeight
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsVisible(true);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible, rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={isVisible ? 'animate-active' : ''}
      style={isVisible ? undefined : minHeight ? { minHeight } : undefined}
    >
      {isVisible ? children : null}
    </div>
  );
};

export default LazySection;
