export default function Button({ children, onClick, href, className = "", size = "normal" }) {
  // Vi bruger inline styles for at være helt sikre på at størrelsen slår igennem
  const baseClasses = `
    border border-[#8C571E] 
    text-[#fff] 
    font-secondary 
    uppercase 
    tracking-widest 
    rounded-[20px]
    hover:bg-[#C9955D]/10 
    transition-colors 
    cursor-pointer
    grid place-items-center
    bg-[#C9955D]
  `;

  const sizeStyles = {
    large: { padding: "2px 8px", fontSize: "18px" },
    normal: { padding: "12px 32px", fontSize: "12px" },
  };

  const style = sizeStyles[size] || sizeStyles.normal;

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseClasses} ${className} inline-block no-underline`}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={`${baseClasses} ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}
