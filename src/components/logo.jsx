// Logo.jsx
import logo from "/public/logo.png";

export default function Logo({ height = 60 }) {
  return (
    <div
      style={{
        height,
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
