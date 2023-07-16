const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className="mb-2 mt-2 w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
