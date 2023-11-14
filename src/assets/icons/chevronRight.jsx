const ChevronRight = ({className = '', width = '16', height = '18'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" className={className}>
    <path
      stroke="#007BFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6.75 13.5l4.5-4.5-4.5-4.5"
    ></path>
  </svg>
);

export default ChevronRight;