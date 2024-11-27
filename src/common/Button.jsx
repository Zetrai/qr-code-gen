const Button = ({ children }) => {
  return (
    <button className="ml-2 h-full w-fit cursor-pointer whitespace-nowrap rounded-[10px] bg-primary px-4 text-center font-montserrat text-darkText shadow-md transition-transform duration-150 active:scale-95 active:shadow-inner">
      {children}
    </button>
  );
};

export default Button;
