export default function Button({ children, onClick, href, className = "", size = "normal" }) {
  const baseClasses = `
    border border-[#8C571E] 
    text-[#fff] 
    font-secondary 
    uppercase 
    tracking-widest 
    rounded-full
    hover:bg-[#b08250] 
    transition-colors 
    cursor-pointer
    grid place-items-center
    bg-[#C9955D]
  `;

  const sizeStyles = {
    large: { padding: "10px 32px", fontSize: "16px" },
    normal: { padding: "8px 24px", fontSize: "12px" },
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
