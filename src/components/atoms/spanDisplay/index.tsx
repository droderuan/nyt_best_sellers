export interface SpanDisplayProps {
  display: string;
  value: string | number;
  defaultValue?: string;
}

const SpanDisplay: React.FC<SpanDisplayProps> = ({
  display,
  value,
  defaultValue = "",
}) => {
  return (
    <div>
      <p className="line-clamp-1 text-ellipsis">
        <span className="font-light mr-0.5 text-xs">{display}</span>
        <span className="font-normal text-sm">{value || defaultValue}</span>
      </p>
    </div>
  );
};

export default SpanDisplay;
