interface DimensionRowProps {
  name: string;
  value: number;
  percentage: number;
  getBarColor: (percentage: number) => string;
}

export function DimensionRow({ name, value, percentage, getBarColor }: DimensionRowProps) {
  return (
    <div className="dim-row">
      <div className="dim-label-row">
        <span className="dim-name">{name}</span>
        <span className="dim-val">{value.toFixed(2)}</span>
      </div>
      <div className="bar-track">
        <div
          className={`bar-fill ${getBarColor(percentage)}`}
          data-width={percentage}
          style={{
            width: "0%",
            transition: "width 0.4s ease-out",
          }}
        ></div>
      </div>
    </div>
  );
}
