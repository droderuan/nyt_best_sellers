interface CheckboxProps {
  value: string;
  label: string;
  checked: boolean;
  onClick: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  value,
  onClick,
  checked,
  label,
}) => {
  return (
    <div className="flex items-center mb-4" onClick={onClick}>
      <input
        checked={checked}
        id={`checkbox-${value}`}
        type="checkbox"
        value={value}
        readOnly
        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500  focus:ring-2 "
      />
      <label
        htmlFor={`checkbox-${value}`}
        className="ml-2 text-sm font-medium text-slate-900"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
