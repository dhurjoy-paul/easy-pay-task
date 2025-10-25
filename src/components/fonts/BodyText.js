export default function BodyText({ children, weight = 400, leading = '1.5', className = '' }) {
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
