export function PaintedEdge({ fill = "#4A523A", className }: { fill?: string; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        fill={fill}
        d="M0 60 C 120 30, 200 90, 320 65 S 540 20, 680 50 S 860 110, 1000 70 S 1240 25, 1440 55 L1440 120 L0 120 Z"
      />
      <circle cx="220" cy="92" r="4" fill={fill} opacity="0.7" />
      <circle cx="420" cy="104" r="3" fill={fill} opacity="0.5" />
      <circle cx="760" cy="98" r="5" fill={fill} opacity="0.6" />
      <circle cx="1100" cy="102" r="3" fill={fill} opacity="0.5" />
      <circle cx="1300" cy="94" r="4" fill={fill} opacity="0.7" />
    </svg>
  );
}
