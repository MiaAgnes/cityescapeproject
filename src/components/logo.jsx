// Logo.jsx
const logo = "/cityescapeproject/Logo.png";

export default function Logo({ height, className }) {
  return (
    <div
      className={className}
      style={{
        height: height,
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={logo}
        alt="CityEscape logo"
        style={{
          height: "100%",
          width: "auto",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
