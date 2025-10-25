export default function SmallTitle({ children, size = '1rem', weight = 600, leading = '1.5', className = '' }) {
  return (
    <p className={`font-outfit ${className}`}
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
