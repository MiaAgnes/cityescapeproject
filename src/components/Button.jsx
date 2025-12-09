export default function Button({ children, onClick, href, className = "", size = "normal" }) {
  // Vi bruger inline styles for at være helt sikre på at størrelsen slår igennem
  const isLarge = size === "large";
  
  const baseClasses = `
    border border-[#C9955D] 
    text-[#fff] 
    font-secondary 
    uppercase 
    tracking-widest 
    rounded-[10px]
    hover:bg-[#C9955D]/10 
    transition-colors 
    cursor-pointer
    flex items-center justify-center
    bg-[#C9955D]
  `;

  const style = isLarge 
    ? { padding: "2px 8px", fontSize: "20px" } // Large
    : { padding: "12px 32px", fontSize: "14px" }; // Normal

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
