const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`mb-2 mt-2 w-full rounded-full px-4 py-2 font-semibold ${
        disabled ? "text-white" : "text-slate-500"
      }
      ${disabled && "bg-teal-950"}
      ${!disabled && "hover:bg-teal-400"} bg-opacity-50 cursor-pointer`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
