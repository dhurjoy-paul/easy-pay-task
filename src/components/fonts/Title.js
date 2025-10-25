export default function Title({ children, size = '2.5rem', weight = 700, leading = '1.2', className = '' }) {
  return (
    <p className={`font-urbanist ${className}`}
      style={{
        fontSize: size,
        fontWeight: weight,
        lineHeight: leading,
      }}
    >
      {children}
    </p>
  );
}
