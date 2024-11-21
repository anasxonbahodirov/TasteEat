export const Location = ({ className }) => {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <path d="M52 0H0V52H52V0Z" fill="url(#pattern0_2_113)" />
      <defs>
        <pattern
          id="pattern0_2_113"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2_113" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2_113"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
