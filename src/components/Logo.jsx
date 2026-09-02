const Logo = ({ height = 28 }) => (
  <svg
    width={(height * 371) / 481}
    height={height}
    viewBox="0 0 371 481"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M0 370.5V0L285.5 89.5V123.5L239.5 137V121.5L49 62L51 311.5L240.5 249.5V218L285.5 203.5V279.5L0 370.5Z"
      fill="#FF7503"
    />
    <path
      d="M90 205.5V281L134.5 269V236.5L324.5 174V423.5L135 364V348L89.5 361V394.5L370.5 480V115.5L90 205.5Z"
      fill="#FF5029"
      stroke="#FF5029"
    />
  </svg>
)

export default Logo
