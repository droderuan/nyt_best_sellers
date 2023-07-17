interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ onChange, checked, label }) => {
  return (
    <div className="flex w-fit flex-1 items-center">
      <input
        checked={checked}
        id={`checkbox-${label}`}
        type="checkbox"
        onChange={onChange}
        className="w-4 h-4  bg-gray-100 border-gray-300 rounded "
      />
      <label
        htmlFor={`checkbox-${label}`}
        className="ml-2 text-sm font-medium text-slate-900"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
