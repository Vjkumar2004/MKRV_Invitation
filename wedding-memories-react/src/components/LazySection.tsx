import React, { useEffect, useRef, useState } from 'react';

type LazySectionProps = {
  children: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  minHeight?: number | string;
};

const LazySection: React.FC<LazySectionProps> = ({
  children,
  rootMargin = '200px 0px',
  threshold = 0.01,
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
    <div ref={ref} style={isVisible ? undefined : minHeight ? { minHeight } : undefined}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazySection;
