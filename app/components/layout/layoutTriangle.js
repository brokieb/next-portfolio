import { Container } from "react-bootstrap";

export default function LayoutTriangle({
  bg,
  text,
  children,
  className,
  botHidden = false,
  topHidden = false,
  minHeight = "80vh",
}) {
  return (
    <>
      <div
        className="start-0 mt-5 "
        style={{
          maxWidth: "100%",
          borderStyle: "solid",
          borderWidth: "0 0 80px 100vw",
          borderColor: `transparent transparent var(--bs-${bg}) transparent`,
          height: "100px",
        }}
      />

      <div
        className={`text-light p-5 ${className}`}
        style={{ minHeight: minHeight, background: `var(--bs-${bg})` }}
      >
        <Container>{children}</Container>
      </div>
      <div
        className="start-0"
        style={{
          borderStyle: "solid",
          borderWidth: "80px 100vw 0 0",
          borderColor: `var(--bs-${bg}) transparent transparent transparent`,
          height: "100px",
        }}
      />
    </>
  );
}
