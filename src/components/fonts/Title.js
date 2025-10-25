export default function Title({ children, weight = 700, leading = '1.2', className = '' }) {
  return (
    <p className={`font-urbanist ${className}`}
      style={{
        fontWeight: weight,
        lineHeight: leading,
      }}
    >
      {children}
    </p>
  );
}
