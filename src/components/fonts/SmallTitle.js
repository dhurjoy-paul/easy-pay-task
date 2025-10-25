export default function SmallTitle({ children, weight = 600, leading = '1.5', className = '' }) {
  return (
    <p className={`font-outfit ${className}`}
      style={{
        fontWeight: weight,
        lineHeight: leading,
      }}
    >
      {children}
    </p>
  );
}
