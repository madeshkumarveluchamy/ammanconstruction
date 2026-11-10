import React, { useState, useEffect, useRef } from 'react';

// Single Rolling Digit Component that scrolls "up" (upside) or "down" (downside)
function RollingDigit({ target, direction = 'up', isAnimated, delay = 0, duration = 2.2 }) {
  const digitHeight = 1.15; // in em

  // Generate sequence of rolling digits for momentum effect
  const numCycles = 12;
  const digits = [];
  
  if (direction === 'up') {
    // Scrolling upside: moves from bottom to top
    for (let i = 0; i < numCycles; i++) {
      digits.push((i * 3 + 1) % 10);
    }
    digits.push(target);
  } else {
    // Scrolling downside: moves from top to bottom
    digits.push(target);
    for (let i = 0; i < numCycles; i++) {
      digits.push((9 - (i * 3 + 2) % 10));
    }
  }

  const totalDigits = digits.length;
  const finalTranslate = direction === 'up' 
    ? -((totalDigits - 1) * digitHeight) 
    : 0;
  const initialTranslate = direction === 'up' 
    ? 0 
    : -((totalDigits - 1) * digitHeight);

  return (
    <span 
      className="d-inline-block position-relative overflow-hidden align-middle"
      style={{
        height: `${digitHeight}em`,
        lineHeight: `${digitHeight}em`,
        verticalAlign: 'baseline',
      }}
    >
      <span
        className="d-flex flex-column align-items-center"
        style={{
          transform: `translateY(${isAnimated ? finalTranslate : initialTranslate}em)`,
          transition: isAnimated 
            ? `transform ${duration}s cubic-bezier(0.12, 0.82, 0.22, 1) ${delay}s`
            : 'none',
          willChange: 'transform',
        }}
      >
        {digits.map((d, idx) => (
          <span 
            key={idx} 
            style={{ 
              height: `${digitHeight}em`, 
              lineHeight: `${digitHeight}em`,
              display: 'block',
            }}
          >
            {d}
          </span>
        ))}
      </span>
    </span>
  );
}

// Counter Column Component
function CounterColumn({ 
  value, 
  suffix = '', 
  label, 
  direction = 'up', 
  isAnimated, 
  delay = 0,
  hasDivider = true,
  isMillion = false,
}) {
  const parts = value.toString().split('');

  return (
    <div 
      className="col-6 col-md-3 py-3 position-relative d-flex flex-column align-items-center justify-content-center"
    >
      {/* Number Row with Rolling Animation (Clean sans font) */}
      <div 
        className="fw-bold mb-1 d-inline-flex align-items-baseline justify-content-center"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(2.1rem, 3.8vw, 3.375rem)',
          lineHeight: 1.1,
          color: '#000000',
          letterSpacing: '-0.02em',
        }}
      >
        {parts.map((char, idx) => {
          if (!isNaN(parseInt(char, 10))) {
            return (
              <RollingDigit 
                key={idx}
                target={parseInt(char, 10)}
                direction={direction}
                isAnimated={isAnimated}
                delay={delay + idx * 0.08}
              />
            );
          } else {
            return (
              <span key={idx} style={{ padding: '0 1px' }}>
                {char}
              </span>
            );
          }
        })}

        {/* Inline Suffix (e.g., Million, +, %) */}
        {isMillion ? (
          <span 
            className="ms-1 fw-normal text-dark"
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.45rem)',
              fontFamily: 'var(--font-body)',
              color: '#000000',
            }}
          >
            {suffix}
          </span>
        ) : (
          <span style={{ marginLeft: '1px' }}>{suffix}</span>
        )}
      </div>

      {/* Label underneath */}
      <div 
        className="fw-medium text-center"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          lineHeight: 1.35,
          color: '#4B5563',
          whiteSpace: 'pre-line',
          marginTop: '4px',
        }}
      >
        {label}
      </div>

      {/* Thin Dark Vertical Divider Line */}
      {hasDivider && (
        <div 
          className="d-none d-md-block position-absolute end-0 top-50 translate-middle-y"
          style={{
            width: '1px',
            height: '52px',
            backgroundColor: '#14181F',
            opacity: 0.85,
          }}
        />
      )}
    </div>
  );
}

export default function StatsBanner() {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Safety fallback timer to guarantee animation triggers on all devices
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 600);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const handleReplay = () => {
    setIsAnimated(false);
    setTimeout(() => setIsAnimated(true), 60);
  };

  return (
    <section 
      ref={sectionRef}
      style={{
        backgroundColor: '#FBF1E6',
        padding: '0',
      }}
    >
      {/* 100% Full-Width Edge-to-Edge Photo Banner using user-added backgroundimagescounter.webp */}
      <div 
        className="w-100 position-relative d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url('/assets/backgroundimagescounter.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          minHeight: '400px',
          padding: '80px 16px',
        }}
      >
        {/* Subtle Contrast Wash */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: 'rgba(20, 24, 31, 0.15)',
            pointerEvents: 'none',
          }}
        />

        {/* Floating White Card centered in the full-width banner */}
        <div 
          className="bg-white position-relative z-1 w-100"
          style={{
            maxWidth: '1160px',
            borderRadius: '12px',
            padding: '36px 28px',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.15)',
            cursor: 'pointer',
          }}
          onClick={handleReplay}
          title="Click to replay counter animation"
        >
          <div className="row g-3 g-md-0 text-center align-items-center">
            {/* Stat 1: 50+ -> Scrolls UPSIDE */}
            <CounterColumn 
              value="50"
              suffix="+"
              label={"Projects\nCompleted"}
              direction="up"
              isAnimated={isAnimated}
              delay={0.1}
              hasDivider={true}
            />

            {/* Stat 2: 5.2 Million -> Scrolls DOWNSIDE */}
            <CounterColumn 
              value="5.2"
              suffix="Million"
              label={"Sq.Ft.\nDelivered"}
              direction="down"
              isAnimated={isAnimated}
              delay={0.25}
              hasDivider={true}
              isMillion={true}
            />

            {/* Stat 3: 99% -> Scrolls UPSIDE */}
            <CounterColumn 
              value="99"
              suffix="%"
              label={"Client\nSatisfaction"}
              direction="up"
              isAnimated={isAnimated}
              delay={0.4}
              hasDivider={true}
            />

            {/* Stat 4: 37+ -> Scrolls DOWNSIDE */}
            <CounterColumn 
              value="37"
              suffix="+"
              label={"years of\nExperience"}
              direction="down"
              isAnimated={isAnimated}
              delay={0.55}
              hasDivider={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
