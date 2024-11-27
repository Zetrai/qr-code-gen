const Button = ({ children, className }) => {
  return (
    <button
      className={`text-darkText w-fitasd ml-2 h-full whitespace-nowrap rounded-[10px] bg-primary px-4 text-center font-montserrat ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
