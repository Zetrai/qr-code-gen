const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`ml-2 h-full w-fit whitespace-nowrap rounded-[10px] bg-primary px-4 text-center font-montserrat text-darkText shadow-md transition-transform duration-150 active:scale-95 active:shadow-inner ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
