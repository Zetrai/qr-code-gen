const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`ml-2 h-full w-fit appearance-none whitespace-nowrap rounded-[10px] bg-primary px-4 text-center font-montserrat text-darkText shadow-md transition-transform duration-150 active:scale-95 active:shadow-inner`}
    >
      {children}
    </button>
  );
};
export default Button;
